module.exports = [
  {
    data: {
      loc: 'c1',
      connections: ['r1', 'r2'],
    },
  },
  {
    data: {
      loc: 'c2',
      connections: ['r2'],
    },
  },
  {
    data: {
      loc: 'r1',
      connections: ['c1'],
    },
  },
  {
    data: {
      loc: 'r2',
      connections: ['c1', 'c2'],
    },
  },
];
