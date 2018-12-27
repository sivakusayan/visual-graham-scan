/**
 * Obtains the starting point for the graham scan. We
 * adopt the convention to start at the bottom-most,
 * right-most point on the canvas. Note that this means
 * we search for the point with the highest y-coordinate,
 * and highest x-coordinate.
 *
 * @param {[Points]} points
 *  The pointset to scan.
 * @return {Points}
 *  The bottom-most, right-most point of the set on the
 *  canvas.
 */
const getStartPoint = (points) => {
  if (points.length === 0) return null;

  return points.reduce((prev, curr) => {
    if (prev.y < curr.y) return curr;
    if (prev.y === curr.y && prev.x < curr.x) return curr;
    return prev;
  });
};

export default getStartPoint;
