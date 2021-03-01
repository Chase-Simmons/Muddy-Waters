const fs = require('fs');
const write = require('write');
let saveData;

const activateCP = (e) => {
  e.F.readline.question('', (res) => {
    e.F.commandParser({ res: res, F: e.F });
  });
};

const readUsername = (e) => {
  e.F.readline.question('enter username : ', (resName) => {
    if (resName === saveData.login.name) {
      readPassword(e);
    } else {
      console.log('invalid username please attempt to `/login` again...');
      activateCP(e);
    }
  });
};
const readPassword = (e) => {
  e.F.readline.question('enter password : ', (resPass) => {
    if (resPass === saveData.login.password) {
      setTimeout(() => {
        console.log('successfully logged in.');
        updateOnlineStatus(e);
      }, 500);
    } else {
      console.log('invalid password please attempt to `/login` again...');
      activateCP(e);
    }
  });
};

const updateOnlineStatus = (e) => {
  e.F.saveDataParser(
    e.F.save({
      data: {
        ostatus: { status: 'online' },
      },
      type: 'save',
    })
  );
  setTimeout(() => {
    welcomeUser(e);
  }, 1000);
};
const welcomeUser = (e) => {
  console.log(
    `hello ${saveData.login.name}!, current location ${e.F.getCityName(
      saveData.progression.location
    )}`
  );
};

module.exports = (e) => {
  saveData = e.F.save({ type: 'get' });
  readUsername(e);
};
