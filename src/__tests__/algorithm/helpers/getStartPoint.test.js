import getStartPoint from '../../../algorithm/helpers/getStartPoint';
import { NULL } from '../../../__constants__/POINT_STATUSES';

describe('getStartPoint', () => {
  it('should return the top-most point.', () => {
    const point1 = { x: 0, y: 0, name: 1, status: NULL };
    const point2 = { x: 0, y: 1, name: 2, status: NULL };
    const point3 = { x: 0, y: -1, name: 3, status: NULL };

    const pointSet = [point1, point2, point3];
    expect(getStartPoint(pointSet)).toEqual(point2);
  });

  it('should return the right-most point in a tie', () => {
    const point1 = { x: 0, y: 0, name: 1, status: NULL };
    const point2 = { x: 1, y: 0, name: 2, status: NULL };
    const point3 = { x: -1, y: 0, name: 3, status: NULL };

    const pointSet = [point1, point2, point3];
    expect(getStartPoint(pointSet)).toEqual(point2);
  });

  it('should correctly traverse to the top-right of the set', () => {
    const point1 = { x: 0, y: 1, name: 1, status: NULL };
    const point2 = { x: 1, y: 1, name: 2, status: NULL };
    const point3 = { x: 0, y: 0, name: 3, status: NULL };
    const point4 = { x: 1, y: 0, name: 4, status: NULL };

    const pointSet = [point1, point2, point3, point4];
    expect(getStartPoint(pointSet)).toEqual(point2);
  });
});
