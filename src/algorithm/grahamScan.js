const setGetStartPoint = require('./helpers/setGetStartPoint');
const preparePointSet = require('./helpers/preparePointSet');
const hasRightTurn = require('./helpers/hasRightTurn');

/**
 * Takes in a pointset, and returns the points that
 * are on the convex hull.
 *
 * @param {[Number, Number][]} points
 *  An array of points in two dimensional space
 * @returns {[Number, Number][]}
 *  The points on the convex hull.
 */
const grahamScan = (points) => {
  if (points.length <= 3) return points;
  const pointSet = JSON.parse(JSON.stringify(points));
  const startPoint = setGetStartPoint(pointSet);
  preparePointSet(startPoint, pointSet);

  const convexHull = [];

  while (pointSet.length !== 0) {
    convexHull.push(pointSet.pop());
    while (convexHull.length >= 3 && hasRightTurn(convexHull)) {
      // Fix right turn by removing intermediary point
      convexHull.splice(convexHull.length - 2, 1);
    }
  }
  return convexHull;
};

module.exports = grahamScan;
