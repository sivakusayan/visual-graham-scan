import {
  GET_START_POINT,
  SORT_POINTS,
  ADD_NEXT_POINT,
  FIX_RIGHT_TURN,
  DONE,
} from './SCAN_STEPS';

const SCAN_STEP_DESCRIPTIONS = {};

SCAN_STEP_DESCRIPTIONS[GET_START_POINT] = 'The first thing we will need to do is find the lowest, rightmost point of the point set. This will be our start point.';
SCAN_STEP_DESCRIPTIONS[SORT_POINTS] = 'Next, we will sort all the points based on how large of an angle they make with the start point, from biggest to smallest.';
SCAN_STEP_DESCRIPTIONS[ADD_NEXT_POINT] = 'Add the next unchecked point in the list to the convex hull.';
SCAN_STEP_DESCRIPTIONS[FIX_RIGHT_TURN] = 'The convex hull has a right turn: let\'s fix it by removing the second-to-last point from the hull.';
SCAN_STEP_DESCRIPTIONS[DONE] = 'We\'re all done! :)';

export default SCAN_STEP_DESCRIPTIONS;
