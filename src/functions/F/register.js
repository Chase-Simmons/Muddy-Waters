module.exports = (e) => {
  let name;
  let password;
  console.log('');
  e.F.readline.question("what's your username? : ", (resName) => {
    name = resName;
    e.F.readline.question('enter a password : ', (resPass) => {
      password = resPass;
      setTimeout(() => {
        console.log('');
        console.log(
          '|---------------------------------------------------------------------------------------------|'
        );
        console.log(
          '|  account registered. now preparing character creation...                                    |'
        );
        console.log(
          '|---------------------------------------------------------------------------------------------|'
        );
      }, 500);

      e.F.saveDataParser({ login: { name, password } });
      e.F.save({ data: { login: { name, password } }, type: 'save' });
      setTimeout(() => {
        console.log(
          '|                please select a class by typing out its name ex. `/warrior`                  |'
        );
        console.log(
          '|---------------------------------------------------------------------------------------------|'
        );
        console.log(
          '|    warrior   :   | str: 7 | dex : 1 | vit: 7 | def: 6 | agi: 2 | arc: 2 | pie: 3 | bonus: 0 |'
        );
        console.log(
          '|    cleric    :   | str: 3 | dex : 1 | vit: 6 | def: 2 | agi: 2 | arc: 5 | pie: 9 | bonus: 0 |'
        );
        console.log(
          '|    rogue     :   | str: 6 | dex : 3 | vit: 6 | def: 2 | agi: 7 | arc: 3 | pie: 1 | bonus: 0 |'
        );
        console.log(
          '|    mage      :   | str: 2 | dex : 2 | vit: 4 | def: 4 | agi: 3 | arc: 9 | pie: 4 | bonus: 0 |'
        );
        console.log(
          '|    archer    :   | str: 2 | dex : 7 | vit: 4 | def: 3 | agi: 6 | arc: 2 | pie: 4 | bonus: 0 |'
        );
        console.log(
          '|    banished  :   | str: 4 | dex : 3 | vit: 4 | def: 4 | agi: 3 | arc: 4 | pie: 1 | bonus: 5 |'
        );
        console.log(
          '|---------------------------------------------------------------------------------------------|'
        );
        console.log('');
        let selectedClass;
        let selectedClassStats;
        const selectClass = () => {
          e.F.readline.question('', (res) => {
            switch (res) {
              case '/warrior':
                selectedClass = 'warrior';
                selectedClassStats = {
                  str: 7,
                  dex: 1,
                  vit: 7,
                  def: 6,
                  agi: 2,
                  arc: 2,
                  pie: 3,
                  bns: 0,
                };
                break;
              case '/cleric':
                selectedClass = 'cleric';
                selectedClassStats = {
                  str: 3,
                  dex: 1,
                  vit: 6,
                  def: 2,
                  agi: 2,
                  arc: 5,
                  pie: 9,
                  bns: 0,
                };
                break;
              case '/rogue':
                selectedClass = 'rogue';
                selectedClassStats = {
                  str: 6,
                  dex: 3,
                  vit: 6,
                  def: 2,
                  agi: 7,
                  arc: 3,
                  pie: 1,
                  bns: 0,
                };
                break;
              case '/mage':
                selectedClass = 'mage';
                selectedClassStats = {
                  str: 2,
                  dex: 2,
                  vit: 4,
                  def: 4,
                  agi: 3,
                  arc: 9,
                  pie: 4,
                  bns: 0,
                };
                break;
              case '/archer':
                selectedClass = 'archer';
                selectedClassStats = {
                  str: 2,
                  dex: 7,
                  vit: 4,
                  def: 3,
                  agi: 6,
                  arc: 2,
                  pie: 4,
                  bns: 0,
                };
                break;
              case '/banished':
                selectedClass = 'banished';
                selectedClassStats = {
                  str: 4,
                  dex: 3,
                  vit: 4,
                  def: 4,
                  agi: 3,
                  arc: 4,
                  pie: 1,
                  bns: 5,
                };
                break;
              default:
                selectClass();
                console.log(
                  'could not match to any class names please try again.'
                );
                break;
            }
            console.log('');
            console.log(`you have selected the class of ${selectedClass}`);
            console.log('');
            setTimeout(() => {
              console.log(
                '|---------------------------------------------------------------------------------------------|'
              );
              console.log(
                '|      you will now roll your bonus stats, the banished class gets an addition 5 points       |'
              );
              console.log(
                '|---------------------------------------------------------------------------------------------|'
              );
              console.log('');
              e.F.readline.question(
                "please hit the enter key whenever you're ready to roll",
                (res) => {
                  const bonus = e.F.rollBonusStats();
                  const trueBonus = bonus + selectedClassStats.bns;
                  setTimeout(() => {
                    console.log(`you rolled a : ${trueBonus}`);
                  }, 1000);
                }
              );
            }, 500);
          });
        };
        selectClass();
      }, 1500);
    });
  });
};
