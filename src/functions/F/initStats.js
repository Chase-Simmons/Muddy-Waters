const initStats = (e) => {
  e.F.saveDataParser(
    e.F.save({
      data: {
        ostatus: { status: 'offline' },
        progression: {
          quest: 'q1',
          location: 'c1',
          tile: '1',
        },
        info: { maxhp: 'temp', currenthp: 'temp' },
        equipment: {
          head: 'temp',
          body: 'temp',
          legs: 'temp',
          weapon: 'temp',
          shield: 'temp',
          hands: 'temp',
          boots: 'temp',
          ring1: 'temp',
          ring2: 'temp',
          necklace: 'temp',
          earrings: 'temp',
        },
        money: { copper: '0', silver: '0', gold: '0' },
        inventory: { test: 'data' },
      },
      type: 'save',
    })
  );
};

module.exports = (e) => {
  initStats(e);
};
