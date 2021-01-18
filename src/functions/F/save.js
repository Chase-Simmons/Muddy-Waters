let save = {};

module.exports = (e) => {
  if (e.type === 'save') {
    save = { ...save, ...e.data };
    console.log(save);
  } else if (e.type === 'get') {
    return save;
  }
};
