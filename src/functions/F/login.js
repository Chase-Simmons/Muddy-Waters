const login = (obj) => {
  obj.F.readline.question('Enter Username : ', (resName) => {
    if (resName === 'admin') {
      obj.F.readline.question('Enter Password : ', (resPass) => {
        if (resPass === 'password') {
          setTimeout(() => {
            console.log('Logging In...');
          }, 500);
          setTimeout(() => {
            console.log('Successfully logged in.');
          }, 1000);
        }
      });
    }
  });
};

module.exports = (obj) => {
  login(obj);
};
