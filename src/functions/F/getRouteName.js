const routes = require('../../core/C/routes');

module.exports = (userLoc) => {
  let location;
  let match = false;

  for (route of routes) {
    if (userLoc === route.data.loc) {
      location = route.data.name;
      return location;
    }
  }

  if (match === false) {
    location = 'unknown area';
    return location;
  }
};
