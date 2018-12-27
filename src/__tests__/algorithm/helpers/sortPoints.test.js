import sortPoints from '../../../algorithm/helpers/sortPoints';
import { NULL } from '../../../__constants__/POINT_STATUSES';

describe('sortPoints', () => {
  it('should sort points by angle with starting point in descending order', () => {
    const startingPoint = { x: 0, y: 0, name: 1, status: NULL };
    const point1 = startingPoint;
    const point2 = { x: -1, y: 0.2, name: 2, status: NULL };
    const point3 = { x: -2, y: 1, name: 3, status: NULL };
    const point4 = { x: -3, y: 2, name: 4, status: NULL };
    const point5 = { x: 1, y: 1, name: 5, status: NULL };

    const pointSet = [point1, point2, point3, point4, point5];
    const sortedPoints = [point5, point4, point3, point2, point1];
    
    sortPoints(startingPoint, pointSet);
    expect(pointSet).toEqual(sortedPoints);
  });

  it('should sort by distance to starting point if angles are tied, in descending order', () => {
    const startingPoint = { x: 0, y: 0, name: 1, status: NULL };
    const point1 = startingPoint;
    const point2 = { x: -1, y: 0, name: 2, status: NULL };
    const point3 = { x: -3, y: 2, name: 3, status: NULL };
    const point4 = { x: 1, y: 1, name: 4, status: NULL };

    const pointSet = [point1, point2, point3, point4];
    const sortedPoints = [point4, point3, point2, point1];

    sortPoints(startingPoint, pointSet);
    expect(pointSet).toEqual(sortedPoints);
  });
});
