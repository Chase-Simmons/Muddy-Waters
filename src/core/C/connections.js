module.exports = [
  {
    data: {
      loc: 'c1',
      length: '1',
      connections: ['r1', 'r2'],
      tileToConnection: ['1', '1'],
    },
  },
  {
    data: {
      loc: 'c2',
      length: '1',
      connections: ['r2'],
      tileToConnection: ['1'],
    },
  },
  {
    data: {
      loc: 'r1',
      length: '12',
      connections: ['c1'],
      tileToConnection: ['1'],
    },
  },
  {
    data: {
      loc: 'r2',
      length: '12',
      connections: ['c1', 'c2'],
      tileToConnection: ['1', '12'],
    },
  },
];
