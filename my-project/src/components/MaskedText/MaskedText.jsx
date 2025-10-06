import { getMaskedString } from "./MaskingUtility";

const MaskedText = ({ text, guessedLetter }) => {
  const maskedString = getMaskedString(text, guessedLetter);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        {maskedString.map((letter, index) => {
          return (
            <span key={index} className="p-1 md:p-2 font-bold">
              {letter}
            </span>
          );
        })}
      </div>
      <div className="hint-box">Hint 💡: {text.wordHint}</div>
    </>
  );
};

export default MaskedText;
