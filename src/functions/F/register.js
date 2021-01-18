const write = require('write');

module.exports = (e) => {
  let username;
  let password;
  e.F.readline.question("what's your username? : ", (resName) => {
    username = resName;
    e.F.readline.question('enter a password : ', (resPass) => {
      password = resPass;
      setTimeout(() => {
        console.log('creating account...');
      }, 250);
      setTimeout(() => {
        console.log('account created, please login using the command `/login`');
      }, 250);

      write(
        'src/save/data.txt',
        `*login*name:${username},password:${password},&`
      ).then((res) => {
        let parsedData = e.F.saveDataParser(res.data);

        e.F.save({ data: parsedData, type: 'save' });

        e.F.readline.question('', (res) => {
          e.F.commandParser({ res: res, F: e.F });
        });
      });
    });
  });
};
