const write = require('write');

const register = (e) => {
  let username;
  let password;
  e.F.readline.question("what's your username? : ", (resName) => {
    username = resName;
    e.F.readline.question('enter a password : ', (resPass) => {
      password = resPass;
      setTimeout(() => {
        console.log('creating account...');
      }, 500);
      setTimeout(() => {
        console.log('account created, please login using the command `/login`');
      }, 1000);

      write(
        'src/save/data.txt',
        `*login*name:${username},password:${password},&`
      ).then((res) => {
        e.F.saveDataParser(res.data);
      });
    });
  });
};

module.exports = (e) => {
  register(e);
};
