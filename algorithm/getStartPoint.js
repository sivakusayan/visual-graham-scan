/**
 * Obtains the starting point for the graham scan. We
 * adopt the convention to start at the bottom-most,
 * right-most point.
 * 
 * @param {[Number, Number][]} points
 *  The pointset to scan.
 * @return {[Number, Number]}
 *  The bottom-most, right-most point of the set.
 */
const getStartPoint = points => points.reduce((prev, curr) => {
  if (prev[1] > curr[1]) return curr;
  if (prev[1] === curr[1] && prev[0] < curr[0]) return curr;
  return prev;
});

module.exports = getStartPoint;
