const preparePointSet = require('../preparePointSet');

describe('preparePointSet', () => {
  it('should sort points by angle with starting point in descending order', () => {
    const startingPoint = [0, 0];
    const pointSet = [
      [0, 0],
      [-1, 0.2],
      [-2, 1],
      [-3, 2],
      [1, 1],
    ];
    const preparedPointSet = [
      [1, 1],
      [-3, 2],
      [-2, 1],
      [-1, 0.2],
      [0, 0],
    ];
    preparePointSet(startingPoint, pointSet);
    expect(pointSet).toEqual(preparedPointSet);
  });

  it('should sort by distance to starting point if angles are tied, in descending order', () => {
    const startingPoint = [0, 0];
    const pointSet = [
      [0, 0],
      [-1, 0],
      [-3, 2],
      [1, 1],
    ];
    const preparedPointSet = [
      [1, 1],
      [-3, 2],
      [-1, 0],
      [0, 0],
    ];
    preparePointSet(startingPoint, pointSet);
    expect(pointSet).toEqual(preparedPointSet);
  });
});
