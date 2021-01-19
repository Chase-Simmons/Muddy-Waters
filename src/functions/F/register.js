module.exports = (e) => {
  let name;
  let password;
  e.F.readline.question("what's your username? : ", (resName) => {
    name = resName;
    e.F.readline.question('enter a password : ', (resPass) => {
      password = resPass;
      setTimeout(() => {
        console.log('');
        console.log('account registered.');
        console.log('');
      }, 250);
      setTimeout(() => {
        console.log('preparing character creation...');
        console.log('');
      }, 500);

      e.F.saveDataParser({ login: { name, password } });
      e.F.save({ data: { login: { name, password } }, type: 'save' });
      setTimeout(() => {
        console.log('please select a class by typing out its name');
        console.log('');
        console.log(
          '     warrior   :   | str: 7 | dex : 1 | vit: 7 | def: 6 | agi: 2 | arc: 2 | pie: 3 | bonus: 0 |'
        );
        console.log(
          '     cleric    :   | str: 3 | dex : 1 | vit: 6 | def: 2 | agi: 2 | arc: 5 | pie: 9 | bonus: 0 |'
        );
        console.log(
          '     rogue     :   | str: 6 | dex : 3 | vit: 6 | def: 2 | agi: 7 | arc: 3 | pie: 1 | bonus: 0 |'
        );
        console.log(
          '     mage      :   | str: 2 | dex : 2 | vit: 4 | def: 4 | agi: 3 | arc: 9 | pie: 4 | bonus: 0 |'
        );
        console.log(
          '     archer    :   | str: 2 | dex : 7 | vit: 4 | def: 3 | agi: 6 | arc: 2 | pie: 4 | bonus: 0 |'
        );
        console.log(
          '     banished  :   | str: 4 | dex : 3 | vit: 4 | def: 4 | agi: 3 | arc: 4 | pie: 1 | bonus: 5 |'
        );
        console.log('');
        e.F.readline.question('', (res) => {
          e.F.commandParser({ res: res, F: e.F });
        });
      }, 750);
    });
  });
};
