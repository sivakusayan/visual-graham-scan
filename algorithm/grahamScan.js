const getStartPoint = require('./helpers/getStartPoint');
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
  const startPoint = getStartPoint(pointSet);
  preparePointSet(startPoint, pointSet);

  const convexHull = [];

  while (pointSet.length !== 0) {
    convexHull.push(pointSet.pop());
    // console.log(convexHull);
    while (convexHull.length >= 3 && hasRightTurn(convexHull)) {
      // Fix right turn by removing intermediary point
      convexHull.splice(convexHull.length - 2, 1);
    }
  }
  return convexHull;
};

grahamScan([[-1, -5], [34, 100], [-100, 26], [5, 26], [3, -53], [-3, -7], [-7, -9], [-2, 1], [-2, 20], [-2, 30]]);

module.exports = grahamScan;
