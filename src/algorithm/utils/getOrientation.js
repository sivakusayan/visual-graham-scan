import TOLERANCE from '../__constants__/TOLERANCE';

/**
 * Calculates the orientation when traversing
 * first point -> second point -> third point
 *
 * Note that, due to the way computer arithmetic is performed,
 * three points that are collinear will not necessarily return
 * 0 - this makes checking for degeneracies in the algorithm difficult.
 * To account for this, we implement a tolerance where if the cross product
 * is 'close enough' to 0, we will return 0.
 */
const getOrientation = (firstPoint, secondPoint, thirdPoint) => {
  const res = (secondPoint.y - firstPoint.y) * (thirdPoint.x - secondPoint.x)
              - (secondPoint.x - firstPoint.x) * (thirdPoint.y - secondPoint.y);
  if (0 - TOLERANCE <= res && res <= 0 + TOLERANCE) return 0;
  // Note that we negate the results in order to account for the canvas y-axis being flipped
  if (res < 0) return 1;
  if (res > 0) return -1;
};

export default getOrientation;
