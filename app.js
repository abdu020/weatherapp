// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Init UI
const ui = new UI();



// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('city').value;

  // change location
  weather.changeLocaton(city, country);

  // Set location in LS
  storage.setLocationData(city, country);


  // get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});


function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}