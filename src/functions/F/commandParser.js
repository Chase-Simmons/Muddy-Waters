const commandParser = (e) => {
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

    default:
      defaultConsole = true;
      break;
  }
  if (defaultConsole === true) {
    obj.F.readline.question('', (res) => {
      commandParser({ res: res, F: e.F });
    });
  }
};

module.exports = (e) => {
  commandParser(e);
};
