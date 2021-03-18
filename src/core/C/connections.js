module.exports = [
  {
    data: {
      loc: 'c1',
      length: '1',
      connections: ['r1', 'r2'],
      tileToConnection: ['1', '1'],
      dangerRating: 0,
    },
  },
  {
    data: {
      loc: 'c2',
      length: '1',
      connections: ['r2', 'r3'],
      tileToConnection: ['1'],
      dangerRating: 0,
    },
  },
  {
    data: {
      loc: 'r1',
      length: '12',
      connections: ['c1'],
      tileToConnection: ['1'],
      dangerRating: 1,
    },
  },
  {
    data: {
      loc: 'r2',
      length: '12',
      connections: ['c1', 'c2'],
      tileToConnection: ['1', '12'],
      dangerRating: 1,
    },
  },
  {
    data: {
      loc: 'r3',
      length: '12',
      connections: ['c2'],
      tileToConnection: ['1'],
      dangerRating: 1,
    },
  },
];
