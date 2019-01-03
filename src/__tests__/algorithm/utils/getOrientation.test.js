import getOrientation from '../../../algorithm/utils/getOrientation';
import { NULL } from '../../../__constants__/POINT_STATUSES';

describe('getOrientation', () => {
  it('should return positive orientation', () => {
    const firstPoint = { x: -1, y: 0, name: 1, status: NULL };
    const secondPoint = { x: 0, y: 0, name: 2, status: NULL };
    const thirdPoint = { x: 0, y: 1, name: 3, status: NULL };
    
    // Note that even though mathematically the orientation should
    // be -1, we negate the returned orientation to account for the
    // canvas y-axis being flipped upside-down.
    expect(getOrientation(firstPoint, secondPoint, thirdPoint)).toBe(1);
  });
  it('should return negative orientation', () => {
    const firstPoint = { x: -1, y: 0, name: 1, status: NULL };
    const secondPoint = { x: 0, y: 0, name: 2, status: NULL };
    const thirdPoint = { x: 0, y: -1, name: 3, status: NULL };

    // Note that even though mathematically the orientation should
    // be 1, we negate the returned orientation to account for the
    // canvas y-axis being flipped upside-down.
    expect(getOrientation(firstPoint, secondPoint, thirdPoint)).toBe(-1);
  });
  it('should return 0 for collinear points', () => {
    const firstPoint = { x: -1, y: 0, name: 1, status: NULL };
    const secondPoint = { x: 0, y: 0, name: 1, status: NULL };
    const thirdPoint = { x: 1, y: 0, name: 1, status: NULL };
    expect(getOrientation(firstPoint, secondPoint, thirdPoint)).toBe(0);
  });
  it('should return 0 for "almost collinear" points', () => {
    const firstPoint = { x: -1, y: 0.00001, name: 1, status: NULL };
    const secondPoint = { x: 0, y: 0, name: 2, status: NULL };
    const thirdPoint = { x: 1, y: 0.00001, name: 3, status: NULL };
    expect(getOrientation(firstPoint, secondPoint, thirdPoint)).toBe(0);
  });
});
