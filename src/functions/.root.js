const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const commandParser = require('./F/commandParser');
const login = require('./F/login');
const help = require('./F/help');

module.exports = {
  readline,
  commandParser,
  login,
  help,
};
