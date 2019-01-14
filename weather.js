class Weather {
  constructor(city, country) {
    this.apiKey = '19ff153d315312044215ae5b479238c6';
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}, ${this.country}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocaton(city, country) {
    this.city = city;
    this.country = country;
  }
}





// 19ff153d315312044215ae5b479238c6
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22

// (`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);