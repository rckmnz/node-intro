var request = require('request-promise');

// Euclidian distance between two points
function getDistance(pos1, pos2) {
  return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}

function getIssPosition() {
  return request('http://api.open-notify.org/iss-now.json')
  .then(
    (responce) => {
      // Parse as JSON
      var location = JSON.parse(responce);
      // Return object with lat and lng
      var latitude = location.iss_position.latitude;
      var longitude = location.iss_position.longitude;
      
      console.log(`The latitude is ${latitude} and the longitude is ${longitude}`);
      return `The latitude is ${latitude} and the longitude is ${longitude}`;
    }
  )
    .catch(
      (err) =>{console.log('Error! No response from api', err)}
    )
}

getIssPosition();

function getAddressPosition(address) {
  // Got api key from google maps
  var apiKey ='AIzaSyDvKgqx4hlQwhgWsuN7V7AYNCv8Jg4Uj_U';
  return request(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`)
  .then(
    (response) => {
      var addressLocation = JSON.parse(response);
      var latLong = {};

      latLong.lat = addressLocation.results[0].geometry.location.lat;
      latLong.lng = addressLocation.results[0].geometry.location.lat;

      console.log (addressLocation);

      return latLong;
    }
  )
  .catch(
    (err) =>{console.log('Error! No response from api', err)}
  )
}

console.log(getAddressPosition('80 rue Prince, Montreal, QC H3C 2M8'));


function getCurrentTemperatureAtPosition(position) {

}

function getCurrentTemperature(address) {

}

function getDistanceFromIss(address) {

}