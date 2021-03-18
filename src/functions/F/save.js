const write = require('write');
let save = {};

module.exports = (e) => {
  if (e.type === 'save') {
    save = { ...save, ...e.data };
  } else if (e.type === 'delete') {
    write('src/save/data.txt', '');
    save = {};
  }
  // console.log(save.progression);
  return save;
};
