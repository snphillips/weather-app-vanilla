/* ===============================
updates the GIF
 =============================== */
//  TODO - refactor to ternary and use weather-objects
export default function updateWeatherGIF(weather, currentTemp, humidity) {
  // Get data from parseWeatherData
  console.log(
    "weather: ",
    weather,
    "temperature: ",
    currentTemp,
    "humidity:",
    humidity
  );
  var imageGIF = document.querySelector("img");

  switch (weather) {
    // Al Roker in rain
    case "heavy intensity rain":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/xUPGcdhiQf2vbfDCyk/giphy.gif"
      );
      break;
    // Al Roker in rain
    case "moderate rain":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/xUPGcdhiQf2vbfDCyk/giphy.gif"
      );
      break;

    // Claymation rain cloud
    case "rain":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/hk6czgfmwVJS0/giphy.gif"
      );
      break;
    // Guy with remote control
    case "shower rain":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/l4FGkdtLGfpUiBdFC/giphy.gif"
      );
      break;
    // Thunderstorm in coffee cup
    case "thunderstorm":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/3oEjIa5lbVSfv8a9s4/giphy.gif"
      );
      break;
    // Al Roker in light rain
    case "light rain":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/xUPGcILSlV4VjCZ9PG/giphy.gif"
      );
      break;
    // Al Roker in light rain
    case "drizzle":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/xUPGcILSlV4VjCZ9PG/giphy.gif"
      );
    // Al Roker in light rain
    case "light intensity drizzle":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/xUPGcILSlV4VjCZ9PG/giphy.gif"
      );
      break;
    // woman in bathing suit, on ground with rain
    case "heavy intensity drizzle":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/26ufcMjwXjpTHNG1i/giphy.gif"
      );
      break;
    // cat flying through sky
    case "clear sky":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif"
      );
      break; // cat flying through sky
    case "sky is clear":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif"
      );
      break;
    // Kramer turkey
    // TODO: fix weather descriptions
    case "> 90":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/5xqKWd6761tkY/giphy.gif"
      );
      break;
    // slipping penguin
    // TODO: fix weather descriptions
    case "< 25":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/BvBEozfsXWWHe/giphy.gif"
      );
      break;
    // melting popcicle
    case humidity > 80 && currentTemp > 80:
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/xUA7b0fCaEIjdwJXTa/giphy.gif"
      );
      break;
    // Al Roker in snow
    case "snow":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/xUPGcChZRE8p2djeiQ/giphy.gif"
      );
      break;
    // hanging rocking clouds
    case "few clouds":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/h0VzgrFX9AKXK/giphy.gif"
      );
      break;
    // sloth clouds
    case "clouds" || weather === "scattered clouds":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/rrFcUcN3MFmta/giphy.gif"
      );
      break;
    // cloud falls on lady
    case "broken clouds":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/rrFcUcN3MFmta/giphy.gif"
      );
      break;
    // B&W moody cloudy sky
    case "overcast clouds":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/lKKXOCVviOAXS/giphy.gif"
      );
      break;
    // dust gif
    case "dust":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/l4pSWPz4u8zQcXjY4/giphy.gif"
      );
      break;
    // oscar the grouch
    case "light snow":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/4jGoaiwq9oRri/giphy.gif"
      );
      break;
    // cup of mist
    case "mist":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/apB1oxVnxPaLu/giphy.gif"
      );
      break;
    // cup of mist
    case "fog":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/apB1oxVnxPaLu/giphy.gif"
      );
      break;
    // cat smoke
    case "haze":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/HknSLLEbzZCoM/giphy.gif"
      );
      break;
    // cousin itt smoking
    case "smoke":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/5xtDarLUQd5DqgXHJks/giphy.gif"
      );
      break;
    // wet cat
    case "sleet":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/26BGD4XaoPO3zTz9K/giphy.gif"
      );
      break;
    // wet cat
    case "shower sleet":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/26BGD4XaoPO3zTz9K/giphy.gif"
      );
      break;
    // elves with umbrellas
    case "rain and snow":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/3osBLtpZ8xhRZRYaGs/giphy.gif"
      );
      break;
    // elves with umbrellas
    case "light rain and snow":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/3osBLtpZ8xhRZRYaGs/giphy.gif"
      );
      break;
    // elves with umbrellas
    case "light shower snow":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/3osBLtpZ8xhRZRYaGs/giphy.gif"
      );
      break;
    // elves with umbrellas
    case "shower snow":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/3osBLtpZ8xhRZRYaGs/giphy.gif"
      );
      break;
    // spinning slushy. replace this one
    case "heavy shower snow":
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/l378an2e0zaQWvSZW/giphy.gif"
      );
      break;
    // Dog digging on moon
    default:
      imageGIF.setAttribute(
        "src",
        "https://media.giphy.com/media/iqtppTG9X8lwTKda0F/giphy.gif"
      );
  }
}
