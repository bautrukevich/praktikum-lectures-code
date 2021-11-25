// const result = {
//   a: 1,
//   b: 2,
//   c: 3,
// }
// result
// Object.values(result)
// Object.keys(result)

// const newArray = [1, 2, 3, 4, 5].filter(function(element) {
//   return element > 3
// })

// newArray


function duplicateCount(text){
  const result = {}
  for (let i = 0; i < text.length; i++) {
    const letter = text[i].toLowerCase();

    if (result[letter]) {
      result[letter] = result[letter] + 1
    } else {
      result[letter] = 1
    }
  }
  const duplicates = Object.values(result);
  const repeatsMoreThanOnce = duplicates.filter(function(element) {
    return element > 1
  })

  return repeatsMoreThanOnce.length;
}

function sum(numbers) {
  return numbers.reduce(function(prevNumber, currentNumber) {
    return prevNumber + currentNumber;
  }, 3)
}

sum([1, 2, 3])

function duplicateCount(text){
  const arrayOfLetters = text.split('')
  const reducer = function(prevLetters, currentLetter) {
    const key = currentLetter.toLowerCase();
    const value = (prevLetters[key] || 0) + 1

    return {
      ...prevLetters,
      [key]: value,
    }
  }
  const result = arrayOfLetters.reduce(reducer, {});
  const duplicates = Object.values(result);
  const repeatsMoreThanOnce = duplicates.filter(function(element) {
    return element > 1
  })

  return repeatsMoreThanOnce.length;
}

duplicateCount("aabbcde")


const person = {
  name: 'Siarhei',
  lastName: 'Bautrukevich'
}

Object.assign({}, {
  name: 'Siarhei',
  lastName: 'Bautrukevich'
}, {
  name: 'Сергей'
})

const newPerson = {
  ...person,
  name: 'Сергей'
}

const arrayOfLetters = ['a', 'b', 'c']
const newArray = [
  ...arrayOfLetters,
  'd',
];

