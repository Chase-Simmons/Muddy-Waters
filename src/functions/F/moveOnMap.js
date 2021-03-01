const connections = require('../../core/C/connections');

module.exports = (userLoc) => {
  for (location of connections) {
    if (userLoc === location.data.loc) {
      console.log(location.data.connections);
    }
  }

  return location;
};
