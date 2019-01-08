/**
 * React-Konva imports entire konva library in its implementation,
 * making the bundle size larger than it needs to be. This solves
 * that issue.
 *
 * https://github.com/konvajs/react-konva/issues/35
 */
const Konva = require("./node_modules/konva/src/Core");

require("./node_modules/konva/src/shapes/Ellipse");
require("./node_modules/konva/src/shapes/Line");

module.exports = Konva;
