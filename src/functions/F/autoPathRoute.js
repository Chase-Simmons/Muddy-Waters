let totalTiles;
let currentTile = 1;
let pathToTile = 5;
let currentStatus;

const beginRoute = (e) => {
  currentTile++;
  console.log(currentTile, pathToTile);
  e.F.saveDataParser(
    e.F.save({
      data: {
        progression: {
          ...e.F.save({ type: 'get' }).progression,
          tile: currentTile,
        },
      },
      type: 'save',
    })
  );
  e.F.randomEncounter(totalTiles);
  setTimeout(() => {
    if (currentTile !== pathToTile) {
      beginRoute(e);
    } else if (currentTile === pathToTile) {
      //send save update
    }
  }, 1000);
};

module.exports = (e) => {
  console.log(e);
  totalTiles = e.length;
  pathToTile = 5;
  console.log(totalTiles, pathToTile);
  if (e.status === 'start') {
    currentStatus = 'start';
    beginRoute(e);
  }
};
