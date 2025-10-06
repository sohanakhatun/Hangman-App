const LetterButtons = ({ text, guessedLetters, onLetterClick }) => {
  const Alphabets = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

  const originalLetters = new Set(text.wordValue.toUpperCase().split(""));
  const guessedLettersSet = new Set(guessedLetters);

  const buttonStyle = function (letter) {
    if (guessedLettersSet.has(letter)) {
      return `${originalLetters.has(letter) ? "bg-green-500" : "bg-red-500"}  `;
    } else {
      return "bg-blue-500";
    }
  };

  function handleLetterClick(event) {
    const charOftheLetter = event.target.value;
    onLetterClick?.(charOftheLetter);
  }

  const buttons = Alphabets.map((letter) => {
    return (
      <button
        key={`button-${letter}`}
        value={letter}
        onClick={handleLetterClick}
        disabled={guessedLettersSet.has(letter)}
        className={`h-12 w-12 m-1 text-white rounded-md cursor-pointer ${buttonStyle(
          letter
        )}`}
      >
        {letter}
      </button>
    );
  });

  return <>{buttons}</>;
};

export default LetterButtons;
