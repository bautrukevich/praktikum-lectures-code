function accum(string) {
  const arrayOfLetters = [...string];
  const newArray = arrayOfLetters.map(function(element, index) {
    const firstLetter = element.toUpperCase();
    const repeatedLetter = element.toLowerCase().repeat(index);

    return `${firstLetter}${repeatedLetter}`;
  })

	return newArray.join('-');
}

accum("abcd") // "A-Bb-Ccc-Dddd"

function reverseString(string) {
  return [...string].reverse().join('');
}

reverseString('abcd') // dcba
