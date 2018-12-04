const getDistance = (firstPoint, secondPoint) => Math.sqrt(
  (((firstPoint[0] - secondPoint[0]) ** 2) + ((firstPoint[1] - secondPoint[1]) ** 2))
);

module.exports = getDistance;
