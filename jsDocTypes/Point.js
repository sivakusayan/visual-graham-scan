/** 
 * @typedef {Object} Point
 * Models a point in the graham scan algorithm
 * @property {Number} x
 * The x-coordinate of the point.
 * @property {Number} y
 * The y-coordinate of the point
 * @property {'accepted' | 'rejected'=} status
 * Determines whether the point was rejected or accepted by the algorithm.
 * Point is accepted if it is on the convex hull, and rejected if it was
 * on the convex hull but had to be removed due to a right turn. Points
 * that haven't been visited yet will not have their status defined.
 */
