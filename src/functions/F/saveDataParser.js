const saveDataParser = (e) => {
  let readingGroupKey = false;
  let readingDataKey = false;
  let readingData = false;
  let groupKey = '';
  let dataKey = '';
  let data = '';
  let dataArray = [];
  let saveData = {};

  for (let i = 0; i < e.length; i++) {
    if (e[i] === '*') {
      if (readingGroupKey === false) {
        readingGroupKey = true;
      } else {
        readingGroupKey = false;
        readingDataKey = true;
      }
    } else if (e[i] === ':') {
      readingDataKey = false;
      readingData = true;
    } else if (e[i] === ',') {
      dataArray.push({ [dataKey]: data });
      dataKey = '';
      data = '';
    } else if (e[i] === '&') {
      saveData = {
        [groupKey]: {},
      };

      for (item in dataArray) {
        saveData = {
          ...saveData,
          [groupKey]: {
            ...item,
          },
        };
      }
      readingGroupKey = false;
      readingDataKey = false;
      readingData = false;
      groupKey = '';
      dataKey = '';
      data = '';
      dataArray = [];
    }
    if (readingGroupKey === true) {
      if (e[i] !== '*') {
        groupKey += e[i];
      }
    }
    if (readingDataKey === true) {
      dataKey += e[i];
    }
    if (readingData === true) {
      data += e[i];
    }
  }

  console.log(saveData);
  return saveData;
};

module.exports = (e) => {
  saveDataParser(e);
};
