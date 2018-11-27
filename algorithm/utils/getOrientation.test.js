const getOrientation = require('./getOrientation');

describe('getOrientation', () => {
  it('should return positive orientation', () => {
    const vertex = [0,0];
    const firstPoint = [0, -1];
    const secondPoint = [-1, 0];
    expect(getOrientation(vertex, firstPoint, secondPoint)).toBe(1);
  });
  it('should return negative orientation', () => {
    const vertex = [0,0];
    const firstPoint = [0, 1];
    const secondPoint = [1, 0];
    expect(getOrientation(vertex, firstPoint, secondPoint)).toBe(-1);
  });
  it('should return 0 for collinear points', () => {
    const vertex = [0,0];
    const firstPoint = [-1, 0];
    const secondPoint = [1, 0];
    expect(getOrientation(vertex, firstPoint, secondPoint)).toBe(0);
  });
  it('should return 0 for "almost collinear" points', () => {
    const vertex = [0,0];
    const firstPoint = [-1, 0.001];
    const secondPoint = [1, 0.001];
    expect(getOrientation(vertex, firstPoint, secondPoint)).toBe(0);
  });
});
