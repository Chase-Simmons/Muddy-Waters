const fs = require('fs');
const write = require('write');

const activateCP = (e) => {
  e.F.readline.question('', (res) => {
    e.F.commandParser({ res: res, F: e.F });
  });
};

module.exports = (e) => {
  const saveData = e.F.save({ type: 'get' });
  e.F.readline.question('Enter Username : ', (resName) => {
    if (resName === saveData.login.name) {
      e.F.readline.question('Enter Password : ', (resPass) => {
        if (resPass === saveData.login.password) {
          setTimeout(() => {
            console.log('Logging In...');
          }, 500);
          setTimeout(() => {
            console.log('Successfully logged in.');
          }, 1000);
          setTimeout(() => {
            console.log(`hello ${saveData.login.name}!`);
          }, 1500);
        } else {
          console.log('invalid password please attempt to `/login` again...');
          activateCP(e);
        }
      });
    } else {
      console.log('invalid username please attempt to `/login` again...');
      activateCP(e);
    }
  });
};
