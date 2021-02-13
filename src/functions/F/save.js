let save = {};

module.exports = (e) => {
  if (e.type === 'save') {
    save = { ...save, ...e.data };
  } else if (e.type === 'delete') {
    save = {};
  }
  console.log(save);
  return save;
};
