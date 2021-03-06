const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const commandParser = require('./F/commandParser');
const login = require('./F/login');
const help = require('./F/help');
const register = require('./F/register');
const saveDataParser = require('./F/saveDataParser');
const save = require('./F/save');
const rollBonusStats = require('./F/rollBonusStats');
const deleteSave = require('./F/deleteSave');
const getCityName = require('./F/getCityName');
const getRouteName = require('./F/getRouteName');
const moveOnMap = require('./F/moveOnMap');
const initStats = require('./F/initStats');
const autoPathRoute = require('./F/autoPathRoute');
const randomEncounter = require('./F/randomEncounter');

module.exports = {
  readline,
  login,
  help,
  register,
  commandParser,
  saveDataParser,
  save,
  rollBonusStats,
  deleteSave,
  getCityName,
  getRouteName,
  moveOnMap,
  initStats,
  autoPathRoute,
  randomEncounter,
};
