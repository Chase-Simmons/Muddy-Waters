const write = require('write');
const recrypt = require('./re:crypt');

module.exports = (e) => {
  if (typeof e === 'string') {
    e = recrypt({ mode: 'decrypt', data: e });

    let readingGroupKey = false;
    let readingDataKey = false;
    let readingData = false;
    let groupKey = '';
    let groupKeyObj = {};
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
        readingDataKey = true;
        readingData = false;
        dataKey = '';
        data = '';
      } else if (e[i] === '&') {
        for (let index = 0; index < dataArray.length; index++) {
          groupKeyObj = {
            ...groupKeyObj,
            ...dataArray[index],
          };
        }
        saveData = {
          ...saveData,
          [groupKey]: groupKeyObj,
        };

        readingGroupKey = false;
        readingDataKey = false;
        readingData = false;
        groupKey = '';
        groupKeyObj = {};
        dataArray = [];
      }
      if (readingGroupKey === true) {
        if (e[i] !== '*' && e[i] !== ':' && e[i] !== ',' && e[i] !== '&') {
          groupKey += e[i];
        }
      }
      if (readingDataKey === true) {
        if (e[i] !== '*' && e[i] !== ':' && e[i] !== ',' && e[i] !== '&') {
          dataKey += e[i];
        }
      }
      if (readingData === true) {
        if (e[i] !== '*' && e[i] !== ':' && e[i] !== ',' && e[i] !== '&') {
          data += e[i];
        }
      }
    }

    return saveData;
  } else if (typeof e === 'object') {
    let unparsedSaveData = '';

    for (const [groupKey, groupKeyObj] of Object.entries(e)) {
      unparsedSaveData += `*${groupKey}*`;
      for (const [dataKey, data] of Object.entries(groupKeyObj)) {
        unparsedSaveData += `${dataKey}:${data},`;
      }
      unparsedSaveData += '&';
    }

    write(
      'src/save/data.dat',
      recrypt({
        mode: 'encrypt',
        data: unparsedSaveData,
      })
    );
  }
};
