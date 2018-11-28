const getOrientation = require('./getOrientation');

describe('getOrientation', () => {
  it('should return negative orientation', () => {
    const firstPoint = [-1, 0];
    const secondPoint = [0, 0];
    const thirdPoint = [0, 1];
    expect(getOrientation(firstPoint, secondPoint, thirdPoint)).toBe(-1);
  });
  it('should return positive orientation', () => {
    const firstPoint = [-1, 0];
    const secondPoint = [0, 0];
    const thirdPoint = [0, -1];
    expect(getOrientation(firstPoint, secondPoint, thirdPoint)).toBe(1);
  });
  it('should return 0 for collinear points', () => {
    const firstPoint = [-1, 0];
    const secondPoint = [0, 0];
    const thirdPoint = [1, 0];
    expect(getOrientation(firstPoint, secondPoint, thirdPoint)).toBe(0);
  });
  it('should return 0 for "almost collinear" points', () => {
    const firstPoint = [-1, 0.001];
    const secondPoint = [0, 0];
    const thirdPoint = [1, 0.001];
    expect(getOrientation(firstPoint, secondPoint, thirdPoint)).toBe(0);
  });
});
