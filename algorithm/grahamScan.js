const getAngle = require('./utils/getAngle');
const getStartPoint = require('./helpers/getStartPoint');
const preparePointSet = require('./helpers/preparePointSet');

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
  const pointSet = JSON.stringify(JSON.parse(points));
  const startPoint = getStartPoint(points);
  preparePointSet(startPoint, pointSet);
  
  const convexHull = [];

  return convexHull;
};

module.exports = grahamScan;
