module.exports = (e) => {
  const getSave = e.F.save({ type: 'get' });
  let defaultConsole = false;
  switch (e.res) {
    case '/login':
      e.F.login(e);
      break;
    case '/logout':
      process.exit();
      break;

    case '/register':
      e.F.register(e);
      break;

    case '/help':
      e.F.help();
      defaultConsole = true;
      break;

    case '/save':
      console.log(getSave);
      defaultConsole = true;
      break;
    case '/delete':
      e.F.deleteSave(e);
      break;

    case '/move':
      e.F.moveOnMap({ F: e.F, userLoc: getSave.progression.location });
      break;

    case '/init':
      e.F.initStats(e);
      defaultConsole = true;

    default:
      defaultConsole = true;
      break;
  }
  if (defaultConsole === true) {
    e.F.readline.question('', (res) => {
      e.F.commandParser({ res: res, F: e.F });
    });
  }
};
