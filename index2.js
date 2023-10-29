const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTimes} = require('./index');


nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log('It did not work: ', error.message);
  });