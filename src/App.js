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
setTimeout(() => {
  const write = require('write');
  console.log(F.save(F));
  write(
    'src/save/dataTest.dat',
    `*login*name:hiraeth,password:password,&*stats*str:15,dex:3,vit:4,def:4,agi:3,arc:4,pie:1,&`
  );
}, 1000);
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
