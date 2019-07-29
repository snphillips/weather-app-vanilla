
// Boilerplate jquery
$(document).ready(function(){

// When the submit button is clicked, a fetch call is made to
// the open weather map API, using the user's inputted zip.
// The clearWeatherData & clearErrorMessage functions are to
// account for edge cases, when a user inputs a bad zip and
// and receives error messages, then makes an other attempt.
  $('#button').on('click', function(){
    let zip = $('#zip').val()
    clearWeatherData()
    clearErrorMessage()
    fetchCall(zip)
    console.log("zip button clicked")
  })

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
        $('#bad-zip-error-message').html("I can't find that zip. Try a different one.")
      })
  }

  function clearErrorMessage(){
    $('#bad-zip-error-message').html("")
  }

  function clearWeatherData(){
    $('#location').html(``)
    $('#weather').html(``)
    $('#current').html(``)
    $('#min').html(``)
    $('#max').html(``)
    $('#humidity').html(``)
    $('#sunrise').html(``)
    $('#sunset').html(``)
  }

  // Getting the weather data from the returned JSON
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
    updateWeather(location, weather, currentTemp, tempMin, tempMax, humidity, sunrise, sunset)
  }

  // Using jquery to display weathe conditions
  function updateWeather(location, weather, currentTemp, tempMin, tempMax, humidity, sunrise, sunset){
    $('#location').html(`The weather in ${location}:`)
    $('#weather').html(`${weather}`)
    $('#current').html(`Temperature: ${currentTemp} °F`)
    $('#min').html(`Low: ${tempMin} °F`)
    $('#max').html(`High: ${tempMax} °F`)
    $('#humidity').html(`Humidity: ${humidity}%`)
    $('#sunrise').html(`Sunrise: ${sunrise}`)
    $('#sunset').html(`Sunset: ${sunset}`)
    updateWeatherGIF();
  }


  function updateWeatherGIF(){

    let weatherDescription = ''
    // In the function updateWeather, #weather is updated with a weather description
    // provided by the API call. Whatever that value is, becomes weatherDescription.
    weatherDescription = $('#weather').html()


   // Al Roker in rain
    if ((weatherDescription === 'heavy intensity rain') ||
        (weatherDescription === 'moderate rain')) {
          // console.log('rain Al Roker gif')
          $('img').attr('src', 'https://media.giphy.com/media/xUPGcdhiQf2vbfDCyk/giphy.gif')
    }
    // Claymation rain cloud
    else if (weatherDescription === 'rain') {
          // console.log('rain Al Roker gif')
          $('img').attr('src', 'https://media.giphy.com/media/hk6czgfmwVJS0/giphy.gif')
    }

    // Al Roker in light rain
    else if ((weatherDescription === 'light rain') ||
             (weatherDescription === 'drizzle') ||
             (weatherDescription === 'light intensity drizzle drizzle') ||
             (weatherDescription === 'heavy intensity drizzle')) {
               // console.log('light rain & drizzle Al Roker gif')
               $('img').attr('src', 'https://media.giphy.com/media/xUPGcILSlV4VjCZ9PG/giphy.gif')
             }
    // cat flying through sky
    else if (weatherDescription === 'clear sky'){
      // console.log('clear sky cat gif')
      $('img').attr('src', 'https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif')
    }
    // Al Roker in snow
    else if (weatherDescription === 'snow'){
      // console.log('snow gif')
      $('img').attr('src', 'https://media.giphy.com/media/xUPGcChZRE8p2djeiQ/giphy.gif')
    }
    // hanging clouds
    else if (weatherDescription === 'few clouds') {
      // console.log('hanging clouds gif')
      $('img').attr('src', 'https://media.giphy.com/media/h0VzgrFX9AKXK/giphy.gif')
    }
    // sloth clouds
    else if ((weatherDescription === 'broken clouds') ||
             (weatherDescription === 'clouds') ||
             (weatherDescription === 'scattered clouds')) {
               // console.log('sloth clouds gif')
              $('img').attr('src', 'https://media.giphy.com/media/rrFcUcN3MFmta/giphy.gif')
    }
    // B&W moody cloudy sky
    else if (weatherDescription === 'overcast clouds') {
      // console.log('soup gif')
      $('img').attr('src', 'https://media.giphy.com/media/lKKXOCVviOAXS/giphy.gif')
    }
    // dust gif
    else if (weatherDescription === 'dust') {
      // console.log('soup gif')
      $('img').attr('src', 'https://media.giphy.com/media/l4pSWPz4u8zQcXjY4/giphy.gif')
    }
    // oscar the grouch
    else if (weatherDescription === 'light snow') {
      // console.log('oscar light snow gif')
      $('img').attr('src', 'https://media.giphy.com/media/4jGoaiwq9oRri/giphy.gif')
    }
    // cup of mist
    else if ((weatherDescription === 'mist') ||
             (weatherDescription === 'fog')) {
      $('img').attr('src', 'https://media.giphy.com/media/apB1oxVnxPaLu/giphy.gif')
    }
    // cat smoke
    else if ((weatherDescription === 'smoke') ||
             (weatherDescription === 'haze')) {
               $('img').attr('src', 'https://media.giphy.com/media/HknSLLEbzZCoM/giphy.gif')
    }
    // wet cat
    else if ((weatherDescription === 'sleet') ||
             (weatherDescription === 'shower sleet')) {
               $('img').attr('src', 'https://media.giphy.com/media/26BGD4XaoPO3zTz9K/giphy.gif')
    }
   // elm with umbrellas
    else if ((weatherDescription === 'rain and snow') ||
   (weatherDescription === 'light rain and snow') ||
   (weatherDescription === 'light shower snow') ||
   (weatherDescription === 'shower snow') ||
   (weatherDescription === 'heavy shower snow')) {
     $('img').attr('src', 'https://media.giphy.com/media/3osBLtpZ8xhRZRYaGs/giphy.gif')
    }

  }

})
