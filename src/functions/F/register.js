let name;
let password;

let selectedClass;
let selectedClassStats;

let bonus;
let trueBonus;
let bonusLeft;

let stat = '';
let statBonuses = {
  str: 0,
  dex: 0,
  vit: 0,
  def: 0,
  agi: 0,
  arc: 0,
  pie: 0,
};

let bonusAmt = 0;
let bonusAmtHolder = '';
let usedPoints = 0;
let usedPointsHolder = '';

const HandleUserPass = (e) => {
  console.log('');
  e.F.readline.question("what's your username? : ", (resName) => {
    name = resName;
    e.F.readline.question('enter a password : ', (resPass) => {
      password = resPass;
      setTimeout(() => {
        console.log('');
        console.log('account registered. now preparing character creation...');
        console.log('');
      }, 500);
      setTimeout(() => {
        classSelection(e);
      }, 1000);
    });
  });
};

const classSelection = (e) => {
  console.log(
    '|---------------------------------------------------------------------------------------------|'
  );
  console.log(
    '|                please select a class by typing out its name ex. `/warrior`                  |'
  );
  console.log(
    '|---------------------------------------------------------------------------------------------|'
  );
  console.log(
    '|--> warrior   :   | str: 7 | dex : 1 | vit: 7 | def: 6 | agi: 2 | arc: 2 | pie: 3 | bonus: 0 |'
  );
  console.log(
    '|--> cleric    :   | str: 3 | dex : 1 | vit: 6 | def: 2 | agi: 2 | arc: 5 | pie: 9 | bonus: 0 |'
  );
  console.log(
    '|--> rogue     :   | str: 6 | dex : 3 | vit: 6 | def: 2 | agi: 7 | arc: 3 | pie: 1 | bonus: 0 |'
  );
  console.log(
    '|--> mage      :   | str: 2 | dex : 2 | vit: 4 | def: 4 | agi: 3 | arc: 9 | pie: 4 | bonus: 0 |'
  );
  console.log(
    '|--> archer    :   | str: 2 | dex : 7 | vit: 4 | def: 3 | agi: 6 | arc: 2 | pie: 4 | bonus: 0 |'
  );
  console.log(
    '|--> banished  :   | str: 4 | dex : 3 | vit: 4 | def: 4 | agi: 3 | arc: 4 | pie: 1 | bonus: 5 |'
  );
  console.log(
    '|---------------------------------------------------------------------------------------------|'
  );
  console.log('');

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
        console.log('could not match to any class names please try again.');
        break;
    }

    console.log('');
    console.log(`you have selected the class of ${selectedClass}`);
    console.log('');

    bonus = e.F.rollBonusStats();
    trueBonus = bonus + selectedClassStats.bns;
    setTimeout(() => {
      console.log(
        '|---------------------------------------------------------------------------------------------|'
      );
      console.log(
        '|      you will now roll your bonus stats, the banished class gets an additional 5 points     |'
      );
      console.log(
        '|---------------------------------------------------------------------------------------------|'
      );
      console.log('');

      e.F.readline.question(
        "please hit the enter key whenever you're ready to roll",
        () => {
          selectedClassStats.bns = trueBonus;
          setTimeout(() => {
            console.log('');
            console.log(`you rolled a : ${trueBonus}`);
            console.log('');
            console.log(
              '|---------------------------------------------------------------------------------------------|'
            );
            console.log(
              '|             you can now distribute your bonus stats. ex. `/str 1` or `/pie 3`.              |'
            );
            console.log(
              '|---------------------------------------------------------------------------------------------|'
            );

            setTimeout(() => {
              console.log('');
              console.log(
                `current stats  |  bonus points left : ${selectedClassStats.bns}`
              );
              console.log('');
              console.log(`--<> str: ${selectedClassStats.str}`);
              console.log(`--<> dex: ${selectedClassStats.dex}`);
              console.log(`--<> vit: ${selectedClassStats.vit}`);
              console.log(`--<> def: ${selectedClassStats.def}`);
              console.log(`--<> agi: ${selectedClassStats.agi}`);
              console.log(`--<> arc: ${selectedClassStats.arc}`);
              console.log(`--<> pie: ${selectedClassStats.pie}`);
              console.log('');

              handleBonusStats(e);
            }, 500);
          }, 500);
        }
      );
    }, 1000);
  });
};

const handleBonusStats = (e) => {
  setTimeout(() => {
    e.F.readline.question('', (res) => {
      console.log('');

      let resDoesMatch = true;
      for (let i = 0; i < res.length; i++) {
        if (res.length >= 5) {
          if (i > 0 && i < 4) {
            stat += res[i];
          } else if (i === 4) {
            if (
              stat === 'str' ||
              stat === 'dex' ||
              stat === 'vit' ||
              stat === 'def' ||
              stat === 'agi' ||
              stat === 'arc' ||
              stat === 'pie'
            ) {
            } else {
              i = res.length;
              console.log(
                `the command of '/${stat}' did not match any skills please try again.`
              );
              console.log('');
              stat = '';
              resDoesMatch = false;
              handleBonusStats(e);
            }
          } else if (i > 4) {
            bonusAmtHolder += res[i];
            usedPointsHolder += res[i];
          }
        } else {
          i = res.length;
          console.log(
            `please check the command again it should be no less than 5 characters long. *includes space`
          );
          console.log('');

          resDoesMatch = false;
          handleBonusStats(e);
        }
      }

      if (resDoesMatch === true) {
        bonusAmt += parseInt(bonusAmtHolder);
        bonusAmt += statBonuses[stat];

        usedPoints += parseInt(usedPointsHolder);

        let exceedsBns = false;

        if (parseInt(trueBonus) - usedPoints < 0) {
          exceedsBns = true;
          usedPoints -= parseInt(usedPointsHolder);
        } else if (parseInt(trueBonus) - usedPoints === 0) {
          exceedsBns = 'end';
          setTimeout(() => {
            regisFinalization(e);
          }, 500);
        }

        bonusLeft = parseInt(trueBonus) - usedPoints;

        selectedClassStats.bns = bonusLeft;

        if (exceedsBns !== true) {
          statBonuses[stat] += statBonuses[stat] + bonusAmt;

          statBonuses = {
            ...statBonuses,
            [stat]: bonusAmt,
          };
        }

        bonusAmt = 0;
        bonusAmtHolder = '';
        usedPointsHolder = '';
        stat = '';

        if (exceedsBns === false) {
          if (trueBonus > 0) {
            console.log('');
            console.log(
              `current stats  |  bonus points left : ${selectedClassStats.bns}`
            );
            console.log('');
            if (statBonuses.str !== 0) {
              console.log(
                `--<> str: ${selectedClassStats.str} +${statBonuses.str}`
              );
            } else {
              console.log(`--<> str: ${selectedClassStats.str}`);
            }
            if (statBonuses.dex !== 0) {
              console.log(
                `--<> dex: ${selectedClassStats.dex} +${statBonuses.dex}`
              );
            } else {
              console.log(`--<> dex: ${selectedClassStats.dex}`);
            }
            if (statBonuses.vit !== 0) {
              console.log(
                `--<> vit: ${selectedClassStats.vit} +${statBonuses.vit}`
              );
            } else {
              console.log(`--<> vit: ${selectedClassStats.vit}`);
            }
            if (statBonuses.def !== 0) {
              console.log(
                `--<> def: ${selectedClassStats.def} +${statBonuses.def}`
              );
            } else {
              console.log(`--<> def: ${selectedClassStats.def}`);
            }
            if (statBonuses.agi !== 0) {
              console.log(
                `--<> agi: ${selectedClassStats.agi} +${statBonuses.agi}`
              );
            } else {
              console.log(`--<> agi: ${selectedClassStats.agi}`);
            }
            if (statBonuses.arc !== 0) {
              console.log(
                `--<> arc: ${selectedClassStats.arc} +${statBonuses.arc}`
              );
            } else {
              console.log(`--<> arc: ${selectedClassStats.arc}`);
            }
            if (statBonuses.pie !== 0) {
              console.log(
                `--<> pie: ${selectedClassStats.pie} +${statBonuses.pie}`
              );
            } else {
              console.log(`--<> pie: ${selectedClassStats.pie}`);
            }
            console.log('');
            handleBonusStats(e);
          }
        } else if (exceedsBns === 'end') {
        } else {
          console.log(
            "you don't have enough points left to add that many to that skill. please try again."
          );
          console.log('');
          handleBonusStats(e);
        }
      }
    });
  }, 500);
};

const regisFinalization = (e) => {
  console.log('finalizing stats...');
  console.log('');
  setTimeout(() => {
    console.log(`${name} the ${selectedClass}`);
    console.log('');
    console.log(`--<> str: ${selectedClassStats.str + statBonuses.str}`);
    console.log(`--<> dex: ${selectedClassStats.dex + statBonuses.dex}`);
    console.log(`--<> vit: ${selectedClassStats.vit + statBonuses.vit}`);
    console.log(`--<> def: ${selectedClassStats.def + statBonuses.def}`);
    console.log(`--<> agi: ${selectedClassStats.agi + statBonuses.agi}`);
    console.log(`--<> arc: ${selectedClassStats.arc + statBonuses.arc}`);
    console.log(`--<> pie: ${selectedClassStats.pie + statBonuses.pie}`);
    console.log('');

    e.F.saveDataParser(
      e.F.save({
        data: {
          login: { name, password },
          ostatus: { status: 'offline' },
          progression: {
            quest: 'q1',
            location: 'c1t',
          },
          stats: {
            str: String(selectedClassStats.str + statBonuses.str),
            dex: String(selectedClassStats.dex + statBonuses.dex),
            vit: String(selectedClassStats.vit + statBonuses.vit),
            def: String(selectedClassStats.def + statBonuses.def),
            agi: String(selectedClassStats.agi + statBonuses.agi),
            arc: String(selectedClassStats.arc + statBonuses.arc),
            pie: String(selectedClassStats.pie + statBonuses.pie),
          },
          money: { copper: '0', silver: '0', gold: '0' },
          inventory: { test: 'data' },
        },
        type: 'save',
      })
    );
    console.log('switching to login...');
    console.log('');
    e.F.login(e);
  }, 500);
};
module.exports = (e) => {
  if (e.F.save({ type: 'get' }).login === undefined) {
    HandleUserPass(e);
  } else {
    console.log(
      'there is already a save file, please use the command `/delete` beforehand to make a new account'
    );
    e.F.readline.question('', (res) => {
      e.F.commandParser({ res: res, F: e.F });
    });
  }
};
