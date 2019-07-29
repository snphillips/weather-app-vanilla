(function() {

// When the submit button is clicked, a fetch call is made to
// the open weather map API, using the user's inputted zip.

// The clearWeatherData & clearErrorMessage functions are to
// account for edge cases, when a user inputs a bad zip and
// and receives error messages, then makes an other attempt.
  document.getElementById("button").addEventListener("click", lookupWeather);

  function lookupWeather() {

    clearWeatherData()


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
        document.getElementById('bad-zip-error-message').innerHTML = `I can't find that zip. Try a different one.`
    })
  }

   fetchCall(zip)

     function clearErrorMessage(){
       document.getElementById('bad-zip-error-message').innerHTML = ``
     }

     clearErrorMessage()


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

     console.log(location, currentTemp, tempMin, tempMax, humidity, weather, sunrise, sunset)
     updateWeather(location, weather, currentTemp, tempMin, tempMax, humidity, sunrise, sunset)
   }


   // Display weather conditions
   function updateWeather(location, weather, currentTemp, tempMin, tempMax, humidity, sunrise, sunset) {
    document.getElementById('location').innerHTML = `The weather in ${location}:`
    document.getElementById('weather').innerHTML = `${weather}`
    document.getElementById('current').innerHTML = `Temperature: ${currentTemp} °F`
    document.getElementById('min').innerHTML = `Low: ${tempMin} °F`
    document.getElementById('max').innerHTML = `High: ${tempMax} °F`
    document.getElementById('humidity').innerHTML = `Humidity: ${humidity}%`
    document.getElementById('sunrise').innerHTML = `Sunrise: ${sunrise}`
    document.getElementById('sunset').innerHTML = `Sunset: ${sunset}`
  // updateWeatherGIF();
  }


    function clearWeatherData(){
      document.getElementById('location').innerHTML = ` `
      document.getElementById('weather').innerHTML = ` `
      document.getElementById('current').innerHTML = ` `
      document.getElementById('min').innerHTML = ` `
      document.getElementById('max').innerHTML = ` `
      document.getElementById('humidity').innerHTML = ` `
      document.getElementById('sunrise').innerHTML = ` `
      document.getElementById('sunset').innerHTML = ` `
  }











}

})();






