import React from 'react';
import { Layer } from 'react-konva';

import ResponsiveStage from './ResponsiveStage';

const ConvexHullStage = ({ onClick }) => (
  <ResponsiveStage
    onClick={onClick}
  >
    <Layer className="point-layer" />
    <Layer className="line-layer" />
  </ResponsiveStage>
);
export default ConvexHullStage;
