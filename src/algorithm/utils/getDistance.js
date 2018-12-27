const getDistance = (firstPoint, secondPoint) => Math.sqrt(
  (((firstPoint.x - secondPoint.x) ** 2) + ((firstPoint.y - secondPoint.y) ** 2)),
);

export default getDistance;
