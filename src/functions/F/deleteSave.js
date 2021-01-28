const write = require('write');
module.exports = (e) => {
  const askToDelete = () => {
    console.log('');
    e.F.readline.question(
      'are you sure you want to delete your save? `y` for yes, `n` for no : ',
      (res) => {
        switch (res) {
          case 'y':
            console.log('');
            console.log('save deleted');
            console.log('');
            e.F.save({ type: 'delete' });
            e.F.readline.question('', (res) => {
              e.F.commandParser({ res: res, F: e.F });
            });
            break;
          case 'n':
            console.log('');
            e.F.readline.question('', (res) => {
              e.F.commandParser({ res: res, F: e.F });
            });
            break;
          default:
            console.log('');
            console.log(`${res} did not match 'y' or 'n'. please try again. `);
            askToDelete();
            break;
        }
      }
    );
  };
  askToDelete();
  // write('src/save/data.txt');
};
