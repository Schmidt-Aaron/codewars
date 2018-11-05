/**
 *
 * Decode the Morse code
 * https://www.codewars.com/kata/decode-the-morse-code/train/javascript
 *
 * 6kyu problem
 *
 */

// my solution -- uses supplied dictionary MORSE_CODE to solve
decodeMorse = function(morseCode) {
  // temp holding array
  let data = [];

  // splits phrase into 'words'
  const words = morseCode.split("   ");

  // splits the words into letters, converts with dictionary, joins into words, pushes to holding arr
  words.forEach(word => {
    const letters = word.split(" ");
    const converted = letters.map(code => MORSE_CODE[code]);
    data.push(converted.join(""));
    data.push("");
  });

  // joins words into string, trims any whitespace on both ends
  const sentence = data.join("").trim();
  return sentence;
};

// second solution with functional approach

const decodeMorse = morse => {
  const decodeMorseLetter = letter => {
    return MORSE_CODE[letter];
  };

  const decodeMorseWord = word => {
    return word
      .split(" ")
      .map(letter => decodeMorseLetter(letter))
      .join("");
  };

  return morse
    .trim()
    .split("   ")
    .map(word => decodeMorseWord(word))
    .join(" ");
};
