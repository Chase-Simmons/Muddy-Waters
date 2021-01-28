let save = {};

module.exports = (e) => {
  if (e.type === 'save') {
    save = { ...save, ...e.data };
  } else if (e.type === 'delete') {
    save = {};
  }
  return save;
};
