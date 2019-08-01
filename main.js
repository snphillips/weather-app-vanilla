(function() {

  document.getElementById("button").addEventListener("click", lookupWeather);


  // The mega function that does it all when user clicks the submit button
  function lookupWeather() {

    // Whatever value the user types into the zip field
    var zip = document.getElementById("zip").value

     //===============================
     // Clears the weather data, in case there was a previous query.
     //===============================
     function clearWeatherData(){
       document.getElementById('location').innerHTML = ` `
       document.getElementById('weather').innerHTML = ` `
       document.getElementById('current-temp').innerHTML = ` `
       document.getElementById('min-temp').innerHTML = ` `
       document.getElementById('max-temp').innerHTML = ` `
       document.getElementById('humidity').innerHTML = ` `
     }
     clearWeatherData()

    //===============================
    // Clears error message, in case there is an error message.
    //===============================
     function clearErrorMessage(){
       document.getElementById('bad-zip-error-message').innerHTML = ``
     }
     clearErrorMessage()

    //===============================
    // Makes weather description display: none;
    //===============================
    function hideWeatherDescription() {
      document.getElementById('weather-description-text').style.display = 'none';
    }
    hideWeatherDescription()

    //===============================
    // The API call to Open Weather
    //===============================
    // This fetch call is made to the Open Weather Map API,
    // using the user's inputted zip.
    function fetchCall(zip){
      fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=fb1d469d46d8692c83f7c5a6183ad373`)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        getWeatherData(response)
      })
      .catch((error) => {
        console.log(error)
        // showWeatherDescription()
        document.getElementById('bad-zip-error-message').innerHTML = `I can't find that zip. Try a different one.`
      })
    }
    fetchCall(zip)

   //===============================
   // Parsing the weather data from the returned JSON
   //===============================
   function getWeatherData(res){
     let location = res.name
     let currentTemp = Math.round(res.main.temp)
     let tempMin = Math.round(res.main.temp_min)
     let tempMax = Math.round(res.main.temp_max)
     let humidity = res.main.humidity
     let weather = res.weather[0].description

     console.log(location, currentTemp, tempMin, tempMax, humidity, weather)
     updateWeatherDescription(location, weather, currentTemp, tempMin, tempMax, humidity)
   }

    //===============================
    // Removes display: none; from weather description
    // This is invoked after GIFs load
    //===============================
    function showWeatherDescription() {
      document.getElementById('weather-description-text').style.display = 'block';
      // console.log("weather description text set to display:block")
    }

   //===============================
   // Update Weather description
   //===============================
   function updateWeatherDescription(location, weather, currentTemp, tempMin, tempMax, humidity) {
     document.getElementById('weather').innerHTML = `${weather}`
     document.getElementById('location').innerHTML = `${location}`
     document.getElementById('current-temp').innerHTML = `Temperature: ${currentTemp} °F`
     document.getElementById('min-temp').innerHTML = `Low: ${tempMin} °F`
     document.getElementById('max-temp').innerHTML = `High: ${tempMax} °F`
     document.getElementById('humidity').innerHTML = `Humidity: ${humidity}%`
     updateWeatherGIF();
   }

   //===============================
   // updates the GIF
   //===============================
   // In the function updateWeatherDescription, #weather is updated with the weather description
   // provided by the API call. Whatever that value is, becomes "weatherDescription".
   // Then the switch statement below sets the innerHTML to GIF, depending on
   // what weatherdescription is.
   function updateWeatherGIF(){

    var weatherDescription = ''
    weatherDescription = document.getElementById('weather').innerHTML
    // console.log("weatherDescription is: " + weatherDescription)

    var imageGIF = document.querySelector("img");

    switch(weatherDescription) {
      case 'heavy intensity rain':
      case 'moderate rain':
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/xUPGcdhiQf2vbfDCyk/giphy.gif');
        break;
      case 'rain':
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/hk6czgfmwVJS0/giphy.gif');
        break;
      case 'thunderstorm' :
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/3oEjIa5lbVSfv8a9s4/giphy.gif');
        break;
      case 'shower rain' :
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/l4FGkdtLGfpUiBdFC/giphy.gif');
        break;
      case 'light rain':
      case 'drizzle':
      case 'light intensity drizzle':
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/xUPGcILSlV4VjCZ9PG/giphy.gif');
        break;
      case 'heavy intensity drizzle':
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/26ufcMjwXjpTHNG1i/giphy.gif');
        break;
      case 'clear sky':
      case 'sky is clear':
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif')
        break;
      case 'snow':
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/xUPGcChZRE8p2djeiQ/giphy.gif');
        break;
      case 'few clouds':
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/h0VzgrFX9AKXK/giphy.gif');
        break;
      case 'clouds':
      case 'scattered clouds':
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/rrFcUcN3MFmta/giphy.gif')
        break;
      case 'broken clouds':
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/l4FsCBugoWDBUZ9O8/giphy.gif')
        break;
      case 'overcast clouds':
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/lKKXOCVviOAXS/giphy.gif');
        break;
      case 'dust':
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/l4pSWPz4u8zQcXjY4/giphy.gif')
        break;
      case 'light snow':
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/4jGoaiwq9oRri/giphy.gif');
        break;
      case 'mist':
      case 'fog':
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/apB1oxVnxPaLu/giphy.gif')
        break;
      case 'haze':
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/HknSLLEbzZCoM/giphy.gif')
        break;
      case 'smoke':
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/dZBa6EQnbnsHe/giphy.gif')
        break;
      case 'sleet':
      case 'shower sleet':
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/26BGD4XaoPO3zTz9K/giphy.gif')
        break;
      case 'rain and snow':
      case 'light rain and snow':
      case 'light shower snow':
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/3osBLtpZ8xhRZRYaGs/giphy.gif')
        break;
      case 'heavy shower snow':
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/l378an2e0zaQWvSZW/giphy.gif')
        break;
      case 'shower snow':
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/l2JIaYp6P3WT5Ybu0/giphy.gif')
        break;
      default:
        imageGIF.setAttribute('src', 'https://media.giphy.com/media/9n5UIlRppk91e/giphy.gif');
    }

   //===============================
   // This ensures that the weather description
   // isn't displayed until the GIF has loaded
   //===============================
    document.querySelector("img").onload = function() {
      // console.log("GIF loaded");
      showWeatherDescription();
    };


  }


}

}
)();

