/**
 * Layer containing any points which were not accepted
 * or rejected by the algorithm yet.
 */

import React from 'react';
import { Layer, Circle } from 'react-konva';
import POINT_CONFIG from '../../constants/POINT_CONFIG';

const PointLayer = ({ points }) => (
  <Layer>
    {points.map(point => (
      <Circle
        x={point.x}
        y={point.y}
        id={point.id}
        radius={POINT_CONFIG.radius}
        fill={POINT_CONFIG.fill}
      />
    ))}
  </Layer>
);

export default PointLayer;