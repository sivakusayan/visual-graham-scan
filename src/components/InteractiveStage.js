/**
 * @fileoverview A responsive wrapper around Konva Stage that allows the user
 * to set points on the canvas.
 */

import React from 'react';
import PropTypes from 'prop-types';

import ResponsiveStage from './ResponsiveStage';
import PointLayerContainer from '../containers/Layers/PointLayerContainer';
import LineLayerContainer from '../containers/Layers/LineLayerContainer';
import WrappedModal from './WrappedModal';

const InteractiveStage = ({ onStageClick, pointCount, isEditable }) => (
  <main className="stage">
    <ResponsiveStage
      className="canvas"
      onClick={isEditable ? onStageClick : null}
      // Note that without onTap, React-Konva will not listen to touch events on mobile
      onTap={isEditable ? onStageClick : null}
    >
      {/* Note that with how React-Konva works, PointLayer MUST come after
      LineLayer if we want the z-index of PointLayer to be higher. See:
      https://github.com/konvajs/react-konva/issues/73 */}
      <LineLayerContainer />
      <PointLayerContainer />
    </ResponsiveStage>
    <WrappedModal isEditable={isEditable} />
    <p className={`stage__text ${pointCount > 0 ? 'fade' : ''}`}>Add a point by clicking on the screen!</p>
  </main>
);

InteractiveStage.propTypes = {
  onStageClick: PropTypes.func,
  pointCount: PropTypes.number,
};

InteractiveStage.defaultProps = {
  onStageClick: () => null,
  pointCount: 0,
};

export default InteractiveStage;
