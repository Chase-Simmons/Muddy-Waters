const { forEach } = require('../../core/C/cities');
const cities = require('../../core/C/cities');

module.exports = (userLoc) => {
  let location;
  let match = false;

  for (city of cities) {
    if (userLoc === city.data.loc) {
      location = city.data.name;
      match = true;
    }
  }

  if (match === false) {
    location = 'unknown area';
  }

  return location;
};
