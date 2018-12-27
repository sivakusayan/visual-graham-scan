import getLength from './getLength';
import getDotProduct from './getDotProduct';
import TOLERANCE from '../__constants__/TOLERANCE';

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
  const firstVector = {
    x: firstPoint.x - vertex.x,
    // Note that we negate y-coordinate since
    // canvas flips axis
    y: -firstPoint.y + vertex.y,
  };
  const secondVector = {
    x: secondPoint.x - vertex.x,
    // Note that we negate y-coordinate since
    // canvas flips axis
    y: -secondPoint.y + vertex.y,
  };
  // Check if the firstPoint or secondPoint is equal to the vertex
  if (firstVector.x === 0 && firstVector.y === 0) return 0;
  if (secondVector.x === 0 && secondVector.y === 0) return 0;
  // Dot product is 0 precisely when vectors are perpendicular
  if (getDotProduct(firstVector, secondVector) === 0) return 90;
  const angle = Math.acos(
    getDotProduct(firstVector, secondVector) / (getLength(firstVector) * getLength(secondVector)),
  ) * 180 / Math.PI;
  // Return 180 if almost collinear
  if (180 - TOLERANCE <= angle && angle <= 180 + TOLERANCE) return 180;

  return angle;
};

export default getAngle;
