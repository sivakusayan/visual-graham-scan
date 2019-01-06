/**
 * Generates a random point given the specified boundaries. Note that
 * we slightly pertubate the numbers in order to make sure no points
 * are close to the edge, making the point set look nicer for the application
 * to use.
 *
 * @param {Number} xBound
 *  The highest x-coordinate for the point
 *
 * @param {Number} yBound
 *  The higher y-coordinate for the point
 */

const generatePoint = (xBound, yBound) => ({
  // Makes sure every point is atleast 50 pixels away
  // from boundary.
  x: Math.random() * (xBound - 100) + 50,
  y: Math.random() * (yBound - 100) + 50,
});

 export default generatePoint;
