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
  return null;
};

module.exports = getAngle;
