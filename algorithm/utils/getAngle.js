const getLength = require('./getLength');
const getDotProduct = require('./getDotProduct');
const TOLERANCE = require('../../constants/TOLERANCE');

/**
 * Gets the angle measure determined by three points.
 *
 * Note that, due to the way computer arithmetic is performed,
 * three points that are collinear will not necessarily return
 * 180 degrees - this makes checking for degeneracies in the
 * algorithm difficult. To account for this, we implement a tolerance
 * where if the angle is 'close enough' to 180, we will return 180.
 */
const getAngle = (vertex, firstPoint, secondPoint) => {
  const firstVector = [firstPoint[0] - vertex[0], firstPoint[1] - vertex[1]];
  const secondVector = [secondPoint[0] - vertex[0], secondPoint[1] - vertex[1]];
  // Check if the firstPoint or secondPoint is equal to the vertex
  if (firstVector[0] === 0 && firstVector[1] === 0) return 0;
  if (secondVector[0] === 0 && secondVector[1] === 0) return 0;
  // Dot product is 0 precisely when vectors are perpendicular
  if (getDotProduct(firstVector, secondVector) === 0) return 90;
  const angle = Math.acos(
    getDotProduct(firstVector, secondVector) / (getLength(firstVector) * getLength(secondVector)),
  ) * 180 / Math.PI;
  // Return 180 if almost collinear
  if (180 - TOLERANCE <= angle && angle <= 180 + TOLERANCE) return 180;

  return angle;
};

module.exports = getAngle;
