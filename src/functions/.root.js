const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const commandParser = require('./F/commandParser');
const login = require('./F/login');
const help = require('./F/help');
const register = require('./F/register');
const saveDataParser = require('./F/saveDataParser');

module.exports = {
  readline,
  login,
  help,
  register,
  commandParser,
  saveDataParser,
};
