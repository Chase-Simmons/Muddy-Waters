module.exports = (e) => {
  let name;
  let password;
  e.F.readline.question("what's your username? : ", (resName) => {
    name = resName;
    e.F.readline.question('enter a password : ', (resPass) => {
      password = resPass;
      setTimeout(() => {
        console.log('account registered.');
      }, 250);
      setTimeout(() => {
        console.log('preparing character creation...');
      }, 500);

      e.F.saveDataParser({ login: { name, password } });
      e.F.save({ data: { login: { name, password } }, type: 'save' });
      e.F.readline.question('', (res) => {
        e.F.commandParser({ res: res, F: e.F });
      });
    });
  });
};
