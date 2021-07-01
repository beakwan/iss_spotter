// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss_promised');

// fetchMyIP()
// .then(fetchCoordsByIP)
// .then(fetchISSFlyOverTimes)
// .then(times => console.log(times));

const {nextISSTimesForMyLocation} = require('./iss_promised');
const {printPassTimes} = require('./index');

nextISSTimesForMyLocation()
.then((times) => {
  printPassTimes(times);
})
.catch(error => console.log("It didn't work", error.message));
