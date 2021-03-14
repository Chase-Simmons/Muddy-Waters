let totalTiles;
let currentTile = 1;
let pathToTile = 2;
let currentStatus;

const beginRoute = (e) => {
  while (currentTile !== pathToTile) {
    currentTile++;
    console.log('i am working');
  }
};

module.exports = (e) => {
  if (e.status === 'start') {
    beginRoute(e.F);
  }
};
