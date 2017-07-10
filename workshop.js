var request = require('request-promise');

// Euclidian distance between two points
function getDistance(pos1, pos2) {
  return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}

function getIssPosition() {
  return request('http://api.open-notify.org/iss-now.json')
  .then(
    function(responce) {
      // Parse as JSON
      var location = JSON.parse(responce);
      // Return object with lat and lng
      var latitude = location.iss_position.latitude;
      var longitude = location.iss_position.longitude;
      
      console.log(`The latitude is ${latitude} and the longitude is ${longitude}`);
      return `The latitude is ${latitude} and the longitude is ${longitude}`;
    }
  )
}
getIssPosition();

function getAddressPosition(address) {

}

function getCurrentTemperatureAtPosition(position) {

}

function getCurrentTemperature(address) {

}

function getDistanceFromIss(address) {

}