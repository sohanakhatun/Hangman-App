import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import homeImage from "../assets/homepage.png";

import wordStore from "../store/WordStore";

const Home = () => {
  const { setWordList, setWord } = wordStore();
  async function fetchWords() {
    const response = await fetch("http://localhost:3000/words");
    const data = await response.json();

    setWordList([...data]);

    const randomIndex = Math.floor(Math.random() * data.length);
    setWord(data[randomIndex]);
  }

  useEffect(() => {
    fetchWords();
  }, []);

  const instructionsArray = [
    "🔍 Use your brainpower to guess the hidden word!",
    "💖 You’ve got only a few chances — choose carefully!",
    "😬 Every wrong letter builds the hangman piece by piece.",
    "🧠 Think fast, save the stickman, and become the hero!",
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 font-benova">
        {/* Title */}
        <h1 className="text-2xl md:text-5xl  text-gray-800 mb-2">
          Hangman Challenge! 🎮
        </h1>
        <p className="text-lg text-gray-600 ">
          Guess the word before it’s too late!
        </p>

        {/* Teaser Art */}
        <div className="w-80 h-80 flex items-center justify-center  mix-blend-darken">
          <span className="text-gray-500">
            <img src={homeImage} />
          </span>
        </div>

        {/* Instructions */}
        <h2 className="text-3xl "> How To Play</h2>
        <div className="pt-4 pb-4">
          {instructionsArray.map((instruction , index) => (
            <p key={index} className="text-sm mt-2 text-gray-600">- {instruction}</p>
          ))}
        </div>

        {/* Start Button */}
        <Link to="/play">
          <Button text="Start Game" styleType="primary"></Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
