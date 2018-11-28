/**
 * Determines the tolerance level of arithmetic when calculating angles 
 * of points. We do this as we need to account for special cases when
 * getAngle() returns 180, since we then have collinear points adjust
 * for.
 */

module.exports = 0.5;
