const commandParser = (obj) => {
  let defaultConsole;
  switch (obj.res) {
    case '/login':
      defaultConsole = false;
      obj.F.login(obj);
      break;
    case '/logout':
      defaultConsole = true;
      break;

    case '/register':
      defaultConsole = false;
      break;

    case '/help':
      defaultConsole = true;
      obj.F.help();
      break;

    default:
      defaultConsole = true;
      break;
  }
  if (defaultConsole === true) {
    obj.F.readline.question('', (res) => {
      commandParser({ res: res, F: obj.F });
    });
  }
};

module.exports = (obj) => {
  commandParser(obj);
};
