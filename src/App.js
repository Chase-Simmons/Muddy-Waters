const F = require('./functions/.root.js');
const C = require('./core/.root.js');
const recrypt = require('./functions/F/re:crypt');
const fs = require('fs');

console.log(C.parse(C.cities));
recrypt({ mode: 'encrypt', data: C.parse(C.cities) });

const checkSave = () => {
  try {
    fs.readFile('src/save/data.dat', 'utf8', function (err, data) {
      let parsedData = F.saveDataParser(data);
      F.save({ data: parsedData, type: 'save' });
    });
  } catch (error) {}
};

checkSave();

const readCMD = () => {
  F.readline.question('', (res) => {
    F.commandParser({ res: res, F: F });
  });
};
console.log(
  '|---------------------------------------------------------------------------------------------|'
);
console.log(
  '|      welcome to Muddy Waters! To login or create an account type `/login` or `/register`    |'
);
console.log(
  '|---------------------------------------------------------------------------------------------|'
);
console.log('');

readCMD();

process.on('exit', () => {
  F.saveDataParser(
    F.save({
      data: {
        ostatus: { status: 'offline' },
      },
      type: 'save',
    })
  );
  console.log('logged out');
});
