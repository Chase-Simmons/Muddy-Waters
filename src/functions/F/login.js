const fs = require('fs');
const write = require('write');

const activateCP = (e) => {
  e.F.readline.question('', (res) => {
    e.F.commandParser({ res: res, F: e.F });
  });
};

module.exports = (e) => {
  const saveData = e.F.save({ type: 'get' });
  e.F.readline.question('enter username : ', (resName) => {
    if (resName === saveData.login.name) {
      e.F.readline.question('enter password : ', (resPass) => {
        if (resPass === saveData.login.password) {
          setTimeout(() => {
            console.log('successfully logged in.');
          }, 500);
          setTimeout(() => {
            console.log(`hello ${saveData.login.name}!`);
          }, 1000);
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
