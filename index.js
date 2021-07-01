const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP('142.127.234.35', (error, coords) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked! Returned coordinates:", coords);
});

fetchISSFlyOverTimes({ latitude: 43.6644, longitude: -79.4195 }, (error, times) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(times);
});
