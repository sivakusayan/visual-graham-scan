const getAngle = require('../utils/getAngle');
const getDistance = require('../utils/getDistance');

/**
 * Enforces a linear order on a point set. We
 * consider a < b if either:
 *
 * 1) The angle formed from startPoint to a is
 * less than the angle formed from startPoint to b.
 *
 * 2) If angles are equal, then the distance from
 * startPoint to a is less than the distance from
 * startPoint to b.
 *
 * See https://en.wikipedia.org/wiki/Graham_scan#Algorithm
 * for more information.
 *
 * @param {[Number, Number]} startPoint
 *  The starting point determined in the graham scan algorithm.
 * @param {[Number, Number]} a
 *  The first point to compare.
 * @param {[Number, Number]} b
 *  The second point to compare.
 * 
 * @return {Number}
 *  Returns -1 if a < b, 1 if a > b, and 0 if a = b
 */
const comparator = (startPoint, firstPoint, secondPoint) => {
  // Take a point that forms a horizontal line with startPoint
  const supportPoint = [startPoint[0] - 1, startPoint[1]];
  const firstAngle = getAngle(startPoint, supportPoint, firstPoint);
  const secondAngle = getAngle(startPoint, supportPoint, secondPoint);
  if (firstAngle < secondAngle) {
    return -1;
  }
  if (firstAngle > secondAngle) {
    return 1;
  }
  const firstDistance = getDistance(startPoint, firstPoint);
  const secondDistance = getDistance(startPoint, secondPoint);
  if (firstDistance < secondDistance) {
    return -1;
  } 
  if (firstDistance > secondDistance) {
    return 1;
  }
  return 0;
};

const preparePointSet = (startPoint, pointSet) => {
  pointSet.sort((a, b) => -comparator(startPoint, a, b));
};

const startingPoint = [0, 0];
const pointSet = [
  [0, 0],
  [-1, 0],
  [-3, 2],
  [1, 1],
];
preparePointSet(startingPoint, pointSet);

console.log(pointSet);

module.exports = preparePointSet;
