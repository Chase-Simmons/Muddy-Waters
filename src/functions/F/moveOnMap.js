const connections = require('../../core/C/connections');
const fs = require('fs');
const { connect } = require('http2');
const autoPathRoute = require('./autoPathRoute');

module.exports = (e) => {
  let match = true;
  for (location of connections) {
    if (e.userLoc === location.data.loc) {
      console.log('<> list of available locations to travel <>');
      for (connection of location.data.connections) {
        if (connection[0] === 'r') {
          console.log(
            `--> ${e.F.getRouteName(connection)} : use command '/${connection}'`
          );
        } else if (connection[0] === 'c') {
          console.log(
            `--> ${e.F.getCityName(connection)} : use command '/${connection}'`
          );
        } else if (connection[0] === 'd') {
          console.log`--> ${e.F.getCityName(
            connection
          )} : use command '/${connection}'`();
        } else if (connection[0] === 'b') {
          console.log`--> ${e.F.getCityName(
            connection
          )} : use command '/${connection}'`();
        } else {
          match = false;
          console.log(`--> No available locations to travel at this time.`);
        }
      }
    }
    if (match === true) {
      e.F.readline.question('', (res) => {
        for (location of connections) {
          if (res === `/${location.data.loc}`) {
            for (connection of location.data.connections) {
              e.F.autoPathRoute({
                F: e.F,
                path: location.data.loc,
                length: location.data.length,
                connections: location.data.connections,
                tileToConnection: location.data.tileToConnection,
                status: 'start',
              });
              e.F.saveDataParser(
                e.F.save({
                  data: {
                    progression: {
                      ...e.F.save({ type: 'get' }).progression,
                      location: `${connection}`,
                    },
                  },
                  type: 'save',
                })
              );
              e.F.commandParser({ res: '', F: e.F });
              return;
            }
          }
        }
      });
    } else {
      e.F.commandParser({ res: '', F: e.F });
    }
  }

  return location;
};
