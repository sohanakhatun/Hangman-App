
/* 
Ex: originalWord : HUMBLE
guessedLetters:['H','M','E']

return -> "H _ M _ _ E"
 */
export function getMaskedString(originalWord, guessedLetters) {
    guessedLetters = guessedLetters.map(letter => letter.toUpperCase());
    const guessedLettersSet = new Set(guessedLetters);
    const result = originalWord?.wordValue?.toUpperCase().split('').map(letter => {
        if (guessedLettersSet.has(letter)) {
            return letter
        } else {
            return "____";
        }
    })

    return result;
}