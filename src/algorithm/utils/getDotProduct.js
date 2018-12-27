/**
 * Gets the dot product of two vectors.
 *
 * @param {Point} firstVector
 * @param {Point} secondVector
 * @return {Number}
 *  The dot product of the two vectors.
 */
const getDotProduct = (
  firstVector,
  secondVector,
) => firstVector.x * secondVector.x + firstVector.y * secondVector.y;

export default getDotProduct;
