import getAngle from '../../../algorithm/utils/getAngle';
import { NULL } from '../../../__constants__/POINT_STATUSES';

describe('getAngle', () => {
  it('should return the angle', () => {
    const vertex = { x: 0, y: 0, name: 1, status: NULL };
    const firstPoint = { x: 0, y: 1, name: 2, status: NULL };
    const secondPoint = { x: 1, y: 0, name: 3, status: NULL };

    expect(getAngle(vertex, firstPoint, secondPoint)).toBeCloseTo(90);
  });
  it('should return 180 for collinear points', () => {
    const vertex = { x: 0, y: 0, name: 1, status: NULL };
    const firstPoint = { x: -1, y: 0, name: 2, status: NULL };
    const secondPoint = { x: 1, y: 0, name: 3, status: NULL };

    expect(getAngle(vertex, firstPoint, secondPoint)).toBe(180);
  });
  it('should return 180 for "almost collinear" points', () => {
    const vertex = { x: 0, y: 0, name: 1, status: NULL };
    const firstPoint = { x: -1, y: 0.00001, name: 2, status: NULL };
    const secondPoint = { x: 1, y: 0.00001, name: 2, status: NULL };

    expect(getAngle(vertex, firstPoint, secondPoint)).toBe(180);
  });
  it('should return 0 if the vertex is repeated', () => {
    const vertex = { x: 0, y: 0, name: 1, status: NULL };
    const firstPoint = { x: 0, y: 0, name: 2, status: NULL };
    const secondPoint = { x: 1, y: 0.00001, name: 2, status: NULL };

    expect(getAngle(vertex, firstPoint, secondPoint)).toBe(0);
  });
});
