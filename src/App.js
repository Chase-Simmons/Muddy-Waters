const F = require('./functions/.root.js');

const readCMD = () => {
  F.readline.question('', (res) => {
    F.commandParser({ res: res, F: F });
  });
};

console.log(
  'Welcome to Muddy Waters! To login or create an account type `/login` or `/register`'
);
readCMD();
