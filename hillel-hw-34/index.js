const refs = {
  weather: document.querySelector(".weather"),
};

const params = {
  URL: "http://api.openweathermap.org/data/2.5/weather",
  CITY: "POLTAVA",
  UNITS: "metric",
  APPID: "5d066958a60d315387d9492393935c19",
};

async function fetchWeatherInfo() {
  const response = await fetch(
    `${params.URL}?q=${params.CITY}&units=${params.UNITS}&APPID=${params.APPID}`
  );
  return await response.json();
}

fetchWeatherInfo().then((weatherData) => {
  buildWeather(weatherData);
});

function buildWeather({
  main: { temp, humidity, pressure },
  wind: { speed, deg },
  weather: [{ description, icon }],
}) {
  refs.weather.innerHTML = `
          <img
            class="icon"
            src="http://openweathermap.org/img/w/${icon}.png"
            alt="weather"
          />
          <div class="tepm">
            <p class="temp__num">${Math.round(temp)}</p>
            <p class="temp__units">°C</p>
          </div>
        <div class="conditions">
          <p class="conditions__pressure">Pressure: ${pressure}mb</p>
          <p class="conditions__humidity">Humidity: ${humidity}%</p>
          <p class="conditions__wind">Wind: ${Math.round(speed)}mph/${deg}°</p>
        </div>
        <div class="loc-info">
          <p class="loc-info__city">${params.CITY}</p>
          <p class="loc-info__description">${description}</p>
        </div>`;
}
