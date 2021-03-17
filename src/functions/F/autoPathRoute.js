let totalTiles;
let currentTile = 1;
let pathToTile = 5;
let currentStatus;

const beginRoute = (e) => {
  currentTile++;
  console.log('i am working');

  setTimeout(() => {
    if (currentTile !== pathToTile) {
      beginRoute(e);
    }
  }, 1000);
};

module.exports = (e) => {
  totalTiles = e.length;
  pathToTile = e.path;
  console.log(totalTiles, pathToTile);
  if (e.status === 'start') {
    currentStatus = 'start';
    beginRoute(e.F);
  }
};
