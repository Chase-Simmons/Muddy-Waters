let save = {};

module.exports = (e) => {
  if (e.type === 'save') {
    save = { ...save, ...e.data };
    return save;
  } else if (e.type === 'get') {
    return save;
  }
};
