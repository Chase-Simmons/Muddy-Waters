const F = require('./functions/.root.js');
const fs = require('fs');

fs.readFile('src/save/data.txt', 'utf8', function (err, data) {
  if (err) throw err;
  let parsedData = F.saveDataParser(data);
  F.save({ data: parsedData, type: 'save' });
});

const readCMD = () => {
  F.readline.question('', (res) => {
    F.commandParser({ res: res, F: F });
  });
};

console.log(
  'welcome to Muddy Waters! To login or create an account type `/login` or `/register`'
);
readCMD();
