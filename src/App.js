const F = require('./functions/.root.js');
const fs = require('fs');

const checkSave = () => {
  try {
    fs.readFile('src/save/data.txt', 'utf8', function (err, data) {
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
