const getAngle = require('./utils/getAngle');
const getStartPoint = require('./helpers/getStartPoint');

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
  const startPoint = getStartPoint(points);

  points.sort((a,b) => getAngle(startPoint, [startPoint[0] + 1, startPoint[1]], a) - getAngle(startPoint, [startPoint[0] + 1, startPoint[1]], b));
  
  const convexHull = [];

  return convexHull;
};

module.exports = grahamScan;
