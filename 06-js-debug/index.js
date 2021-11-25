// function createMessage(name, secondName) {
//   const greetingMessage = `Привет, ${name} ${secondName}`

//   greetingMessage(greeting)
// }

// function greeting(phrase) {
//   alert(phrase)
// }

// createMessage('Сергей')

// // 'use strict';

// // const buttonElement = document.querySelector('.title')

// // const createMessage = function(name, secondName) {
// //   debugger
// //   const greetingMessage = `Привет, ${name} ${secondName}`

// //   greeting(greetingMessage)
// // }

// // const greeting = function(phrase) {
// //   debugger
// //   alert(phrase)
// // }


// // debugger
// // // createMessage('Сергей')

// // const buttonElement = document.querySelector('.button')
// // buttonElement.addEventListener('click', function() {
// //   console.log('На меня нажали');
// // })

// // buttonElement.addEventListener('click', function() {
// //   console.log('На меня еще нажали');
// // })

// // function createCardElement() {
// //   // нашли кнопку лайка
// //   // повесили обработчик события на клик по кнопке
// //   // вернули готовую карточку
// // }

// // function renderCard(data, wrapElement) {
// //   const cardElement = createCardElement(data)
// //   wrapElement.prepend(
// //     cardElement,
// //     '.card__list'
// //   )
// // }

// const person = {
//   name: 'Сергей',
//   secondName: 'Болтрукевич'
// }

// console.log(person)
// console.log(person.name)
// console.log(person.middleName)
// console.log(person?.middleName?.firstLetter)

// if (typeof person.middleName !== 'undefined') {
//   if (typeof person.middleName.firstLetter !== 'undefined') {
//     console.log(person.middleName.firstLetter)
//   }
// }
// console.log(undefined)

// const buttonElement = document.querySelector('.button')

// const ESC_KEY = 'Escape'

// const PI = Math.PI

// let firstName = 'Сергей'
// firstName = 'Елизавета'

const listElement = document.querySelector('.list')
console.log(listElement)
const listElements = listElement.querySelectorAll('.list__item')
console.log(listElements)

const secondListElement = document.querySelector('.list_type_second')
console.log(secondListElement)
const secondListElements = secondListElement.querySelectorAll('.list__item')
console.log(secondListElements)


const editProfilePopupElement = document.querySelector('.popup_type_edit')
const addCardPopupElement = document.querySelector('.popup_type_add')

const handlePopupClick = function(event) {
  console.log(event.target)
  console.log(event.currentTarget)
  if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) {
    closePopup(event.currentTarget)
  }
}
editProfilePopupElement.addEventListener('click', handlePopupClick)

addCardPopupElement.addEventListener('click', handlePopupClick);
