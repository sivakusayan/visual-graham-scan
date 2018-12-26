const getDistance = require('./getDistance');

const getLength = vector => getDistance({ x: 0, y: 0}, vector);

module.exports = getLength;
