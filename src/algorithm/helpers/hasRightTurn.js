import getOrientation from '../utils/getOrientation';

/**
 * Checks if the passed in lineString has a right turn
 * in the most recent 3 points.
 *
 * @param {[Point]} lineString
 */
const hasRightTurn = (lineString) => {
  return getOrientation(...lineString.slice(lineString.length - 3)) === 1;
};

export default hasRightTurn;
