import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/HangMan/HangMan";
import { useNavigate } from "react-router-dom";
import wordStore from "../store/WordStore";
import { useEffect, useState } from "react";
import ResultDisplay from "../components/ResultDisplay/ResultDisplay";
import { getMaskedString } from "../components/MaskedText/MaskingUtility";
const PlayGame = () => {
  const { word, wordList, setWord, score } = wordStore();

  // Guessing Logic:
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [attempts, setAttempts] = useState(word.wordValue?.length + 2);
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  function handleLetterClick(letter) {
    if (!word.wordValue.toUpperCase().includes(letter)) {
      setStep(step + 1);
    }
    setGuessedLetters([...guessedLetters, letter]);
    setAttempts((prev) => prev - 1);
  }

  function replayHandler() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    setWord(wordList[randomIndex]);
    setAttempts(() => word.wordValue?.length + 2);
    setStep(0);
    setGuessedLetters([]);
  }

  useEffect(() => {
    // redirect if word is not defined
    if (!word || !word.wordValue) {
      navigate("/");
    }
  }, [word, navigate]);

  // Guard rendering until word is ready or redirect triggers
  if (!word || !word.wordValue) {
    return null;
  }

  const maskedString = getMaskedString(word, guessedLetters);
  const guessedWord = maskedString?.join("");

  return (
    <div className="flex flex-col gap-2.5 items-center justify-center min-h-screen bg-gray-100 p-6 font-benova">
      {/* Player still guessing */}
      {guessedWord !== word.wordValue && attempts > 0 ? (
        <>
          {word && (
            <>
              <h1 className="text-5xl text-gray-800 mb-2">PlayGame</h1>
              <p>{attempts} attempts left</p>
              <p>Current Score: {score}</p>
              <MaskedText text={word} guessedLetter={guessedLetters} />

              <div className="flex lg:mt-25 gap-1 flex-col-reverse lg:flex-row lg:gap-[10rem] justify-center items-center">
                <div className="letter-buttons-wrapper">
                  <LetterButtons
                    text={word}
                    guessedLetters={guessedLetters}
                    onLetterClick={handleLetterClick}
                  />
                </div>

                <HangMan step={step} />
              </div>
            </>
          )}
        </>
      ) : (
        // ResultDisplay logic
        <ResultDisplay
          correctWord={word.wordValue}
          result={guessedWord === word.wordValue ? "won" : "lost"}
          heading={
            guessedWord === word.wordValue
              ? "Yayy! You won the game"
              : "Game Over!"
          }
          answer={
            guessedWord === word.wordValue
              ? word.wordValue
              : guessedLetters.join("")
          }
          image={
            guessedWord === word.wordValue
              ? "https://gifdb.com/images/high/oscars-award-leonardo-dicaprio-2016-fireworks-ua44115wm2ziygct.gif"
              : "https://media.tenor.com/vVFXYaFm59EAAAAM/jpj-liar.gif"
          }
          replayHandler={replayHandler}
        />
      )}
    </div>
  );
};

export default PlayGame;
