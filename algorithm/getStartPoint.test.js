const getStartPoint = require('./getStartPoint');

describe('getStartPoint', () => {
  it('should return the bottom-most point.', () => {
    const pointSet = [[0, 0], [0, 1], [0, -1]];
    const result = [0, -1];
    expect(getStartPoint(pointSet)).toEqual(result);
  });

  it('should return the right-most point in a tie', () => {
    const pointSet = [[0, 0], [1, 0], [-1, 0]];
    const result = [1, 0];
    expect(getStartPoint(pointSet)).toEqual(result);
  });

  it('should correctly traverse to the bottom-right of the set', () => {
    const pointSet = [[0, 1], [1, 1], [0, 0], [1, 0]];
    const result = [1, 0];
    expect(getStartPoint(pointSet)).toEqual(result);
  });
});
