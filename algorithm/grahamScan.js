const getStartPoint = points => points.reduce((prev, curr) => {
  if (prev[1] > curr[1]) return curr;
  if (prev[1] === curr[1] && prev[0] < curr[0]) return curr;
  return prev;
});

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
  // Traverse pointset, going towards bottomright
  const startPoint = getStartPoint(points);
  console.log(startPoint);
};

module.exports = grahamScan;
