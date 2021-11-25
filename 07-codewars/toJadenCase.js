String.prototype.toJadenCase = function () {
  const arrayOfWords = this.split(' ')

  return arrayOfWords.map(function(word) {
    const firstLetter = word[0].toUpperCase();
    const allTheRest = word.slice(1)

    return `${firstLetter}${allTheRest}`
  }).join(' ')
};

"How can mirrors be real if our eyes aren't real".toJadenCase(); // "How Can Mirrors Be Real If Our Eyes Aren't Real"

// String.prototype.newMethod = function(newString) {
//   console.log(this);
//   return `${this}${newString}`
// }

// 'abc'.newMethod('d');
