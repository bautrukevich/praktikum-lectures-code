const contentElement = document.querySelector('.button');
const buttonElement = contentElement.querySelector('.button');
console.log(buttonElement.textContent)

function onSuccess(position) {
  console.log('Получил геопозицию', position)
}
function onError() {
  console.log('Не получил геопозицию')
}
function handleClick() {
  navigator.geolocation.getCurrentPosition(onSuccess, onError)
}
buttonElement.addEventListener('click', handleClick);


// В браузере, псевдокод
function getCurrentPosition(onSuccess, onError) {
  // Браузер спрашивает нас
  // Идет на сторонний сервис и получает координаты наши
  const position = service.getCoordinates()
  onSuccess(position)

  // если нет
  onError()
}
