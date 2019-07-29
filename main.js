(function() {

// When the submit button is clicked, a fetch call is made to
// the open weather map API, using the user's inputted zip.
// The clearWeatherData & clearErrorMessage functions are to
// account for edge cases, when a user inputs a bad zip and
// and receives error messages, then makes an other attempt.
  document.getElementById("button").addEventListener("click", lookupWeather);

  function lookupWeather() {




    var zip = document.getElementById("zip").value

    console.log("zip button clicked and zip is: " + zip)

    function fetchCall(zip){
      fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=fb1d469d46d8692c83f7c5a6183ad373`)
      .then((response) => {
          return response.json()
      })
      .then((response) => {
      getWeatherData(response)
      console.log(response)
      })
      .catch((error) => {
        console.log(error)
        // $('#bad-zip-error-message').html("I can't find that zip. Try a different one.")
    })
  }

  fetchCall(zip)


    // Parsing the weather data from the returned JSON
  function getWeatherData(res){
    let location = res.name
    let currentTemp = Math.round(res.main.temp)
    let tempMin = Math.round(res.main.temp_min)
    let tempMax = Math.round(res.main.temp_max)
    let humidity = res.main.humidity
    let weather = res.weather[0].description
    // using moment.js to convert from epoch unix time
    let sunrise = moment.unix(res.sys.sunrise).format('h:mm a')
    let sunset = moment.unix(res.sys.sunset).format('h:mm a')
    // updateWeather(location, weather, currentTemp, tempMin, tempMax, humidity, sunrise, sunset)
    console.log(location, currentTemp, tempMin, tempMax, humidity, weather, sunrise, sunset)
  }











}

})();






