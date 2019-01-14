class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.name = document.getElementById('w-name');
    this.wind = document.getElementById('w-wind');
    this.visibility = document.getElementById('w-visibility');
    this.clouds = document.getElementById('w-clouds');

  }

  paint(weather) {

    this.location.textContent = weather.name;

    this.desc.textContent = weather.weather[0].description;

    this.string.textContent = weather.main.temp;

    this.icon.setAttribute('src', `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);

    this.visibility.textContent = `Visibility: ${weather.visibility}`;

    this.clouds.textContent = `Clouds: ${weather.clouds.all}`;

    this.wind.textContent = `Wind: ${weather.wind.deg}`;

    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;


  }
}