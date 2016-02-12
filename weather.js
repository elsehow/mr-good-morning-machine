var request = require('request')

function formatWeather (day) {
  return `~${day.weather[0].description}~\n` +
    `day: ${day.temp.day}F\n` +
    `eve: ${day.temp.eve}F\n` +
    `night: ${day.temp.night}F\n\n` +
    `${day.humidity}% humidity ` +
    `${day.clouds}% cloud cover ` +
    `wind speed ${day.speed} m/h`
}


request.get('http://api.openweathermap.org/data/2.5/forecast/daily?lat=37.8554&lon=-122.2839&appid=44db6a862fba0b067b1930da0d769e98&units=imperial', (err, res, body) => {
  var today = JSON.parse(body).list[0]
  console.log(formatWeather(today))
})
