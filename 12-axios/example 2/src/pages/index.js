import "./index.css"
import axios from "axios"

const API_KEY = "7887e5cf1c90c217e041621be706061f";
const OPENWEATHER_API = "https://api.openweathermap.org/data/2.5/forecast";

const searchForm = document.querySelector(".weather-form");
const input = document.querySelector(".weather-form_input");
const rowTemplate = document.querySelector(".template-weather-data");
const table = document.querySelector(".table");

const renderWeatherTable = (items) => {
  items.forEach((item) => table.append(createWeatherRow(item)));
}

const createWeatherRow = (data) => {
  const rowElement = rowTemplate.content.cloneNode(true).children[0];
  rowElement.querySelector('.table__data_time').textContent = data.dt_txt;
  rowElement.querySelector('.table__data_temp').textContent = Math.round(data.main.temp) + '°C';
  rowElement.querySelector('.table__data_humid').textContent = data.main.humidity + '%';
  rowElement.querySelector('.table__data_cloud').textContent = data.weather[0].description;
  rowElement.querySelector('.table__data_wind').textContent = Math.round(data.wind.speed) + ' м/с';
  return rowElement
}

searchForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  axios(OPENWEATHER_API, {
    params: {
      q: input.value,
      appid: API_KEY,
      units: 'metric',
      lang: 'ru',
    }
  })
    .then(response => {
      console.log({ response })
      renderWeatherTable(response.data.list)
    })
})

