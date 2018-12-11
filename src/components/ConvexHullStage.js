import React from 'react';

import ResponsiveStage from '../utils/ResponsiveStage';
import PointLayer from './PointLayer';
import LineLayer from './LineLayer';

const ConvexHullStage = () => (
  <ResponsiveStage>
    <PointLayer />
    <LineLayer />
  </ResponsiveStage>
);

export default ConvexHullStage;
