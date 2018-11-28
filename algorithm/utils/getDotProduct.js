/**
 * Gets the dot product of two vectors. If the
 * two vectors do not have the same dimension, the
 * bigger vector will be projected to have the same
 * dimension as the smaller vector.
 *
 * @param {Number[]} firstVector
 * @param {Number[]} secondVector
 * @return {Number}
 *  The dot product of the two vectors.
 */
const getDotProduct = (firstVector, secondVector) => {
  // See which vector length to use
  const base = firstVector.length < secondVector.length ? firstVector : secondVector;
  let dotProduct = 0;
  for (let i = 0; i < base.length; i += 1) {
    dotProduct += firstVector[i] * secondVector[i];
  }
  return dotProduct;
};

module.exports = getDotProduct;
