import wordStore from "../../store/WordStore";
import Button from "../Button/Button";
import { useEffect } from "react";
const ResultDisplay = ({
  result,
  heading,
  image,
  answer,
  correctWord,
  replayHandler,
}) => {
  const { score, setScore } = wordStore();

  useEffect(() => {
    if (!correctWord) return;
    answer === correctWord ? setScore("won") : setScore("lost");
  }, []);

  return (
    <>
      <p>{heading}</p>
      <p>Current Score : {score}</p>
      {result === "won" ? (
        <p>Correct Answer : {answer}</p>
      ) : (
        <>
          <p>Wrong Answer: {answer}</p>
          <p>Correct Answer: {correctWord}</p>
        </>
      )}
      <img src={image} className="mix-blend-darken" />

      <div className="current-score">
        <button
          onClick={() => wordStore.getState().setScore("reset")}
          className="border-blue-500 border-2 rounded-md cursor-pointer px-[10px] py-[10px] text-blue-500"
        >
          Reset Score
        </button>
      </div>

      <Button
        text="🚀 Play Again"
        onClickHandler={replayHandler}
        styleType="primary"
      />
    </>
  );
};

export default ResultDisplay;
