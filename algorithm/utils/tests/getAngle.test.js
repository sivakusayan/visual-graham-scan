const getAngle = require('../getAngle');

describe('getAngle', () => {
  it('should return the angle', () => {
    const vertex = [0, 0];
    const firstPoint = [0, 1];
    const secondPoint = [1, 0];
    expect(getAngle(vertex, firstPoint, secondPoint)).toBeCloseTo(90);
  });
  it('should return 180 for collinear points', () => {
    const vertex = [0, 0];
    const firstPoint = [-1, 0];
    const secondPoint = [1, 0];
    expect(getAngle(vertex, firstPoint, secondPoint)).toBe(180);
  });
  it('should return 180 for "almost collinear" points', () => {
    const vertex = [0, 0];
    const firstPoint = [-1, 0.001];
    const secondPoint = [1, 0.001];
    expect(getAngle(vertex, firstPoint, secondPoint)).toBe(180);
  });
  it('should return 0 if the vertex is repeated', () => {
    const vertex = [0, 0];
    const firstPoint = [0, 0];
    const secondPoint = [1, 0.0001];
    expect(getAngle(vertex, firstPoint, secondPoint)).toBe(0);
  });
});
