const search = document.querySelector('.search-box')
const searchValue = document.querySelector('.search-box-input')
const searchIcon = document.querySelector('.search-icon')

// set consts

const weatherDesc = document.querySelector('.weather-desc')
const city = document.querySelector('.city')
const temperature = document.querySelector('.temperature')
const weatherIcon = document.querySelector('.weather-icon-img')
const alert = document.querySelector('.alert')

// icons info

const windSpeedInfo = document.querySelector('#wind-speed')
const humidityInfo = document.querySelector('#humidity')
const feelsLikeInfo = document.querySelector('#feels-like')

// events

searchIcon.addEventListener('click', display)
search.addEventListener('submit', display)

window.addEventListener('DOMContentLoaded', display)




// functions

function capitalize(string) {
    /*  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase(); */
    if (string.length > 1) {
        return string[0][0].toUpperCase() + string[0].slice(1).toLowerCase()
        + ' ' + string[1][0].toUpperCase() + string[1].slice(1).toLowerCase()
    } else {
        return string[0][0].toUpperCase() + string[0].slice(1).toLowerCase()
    }
   
}



async function display() {
    event.preventDefault()
    let value = searchValue.value

    if (searchValue.value == '') {
        value = 'recife'
    }

    // fetch api    

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(value)}&appid=d06cdb298fafc83c520d5ab677fc477e&units=metric&lang=pt_br`
    let result = await fetch(url)
    let data = await result.json()
    console.log(data);


    if (data.cod === 200) {

        alert.textContent = ''

        // get data from api

        const country = data.sys.country
        const cityValue = data.name

        let temperatureValue = data.main.temp
        temperatureValue = temperatureValue.toFixed(0)

        const humidity = data.main.humidity
        const feels = data.main.feels_like
        const weatherValue = data.weather[0].main
        const icon = data.weather[0].icon
        const windSpeed = data.wind.speed

        let description = data.weather[0].description
        description = description.split(' ')



        // set data on items

        city.textContent = `${cityValue}, ${country}`
        temperature.textContent = `${temperatureValue} ºC`
        weatherDesc.textContent = capitalize(description)
        /* weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`)*/
        windSpeedInfo.textContent = `${windSpeed.toFixed(1)}km/h`
        humidityInfo.textContent = `${humidity} %`
        feelsLikeInfo.textContent = `${feels.toFixed(0)} º`


    } else {

        alert.textContent = 'Não foi possível encontrar esta cidade'

    }


}


const interval = setInterval(display, 300000)