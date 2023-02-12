const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outuro",
    "Novembro",
    "Dezembro",
];
/* const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]; */

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
];

/* Get Data */


function currentTime() {

    const data = document.querySelector('.data')
    let today = new Date()



    let year = today.getFullYear()
    let month = months[today.getMonth()]
    let weekDay = weekdays[today.getDay()]
    let day = today.getDate()
    let hours = today.getHours()
    let minutes = today.getMinutes()

    data.textContent = `${weekDay}, ${day} de ${month}, ${year} - ${format(hours)}:${format(minutes)}`

}

setInterval(currentTime, 500)



function format(value) {
    if (value < 10) {
      return `0${value}`
    } else {
      return value
    }
  }