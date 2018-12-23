import {
  START_SCAN,
  STOP_SCAN,
} from '../actionTypes/scanIsActiveActionTypes';

export const startScan = () => ({
  type: START_SCAN,
});

export const stopScan = () => ({
  type: STOP_SCAN,
});
