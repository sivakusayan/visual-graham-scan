/**
 * @fileoverview A responsive wrapper around Konva Stage that allows the user
 * to set points on the canvas.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ResponsiveStage from './ResponsiveStage';
import PointLayerContainer from '../containers/Layers/PointLayerContainer';
import LineLayerContainer from '../containers/Layers/LineLayerContainer';
import ToolTipButton from './ToolTipButton';

class InteractiveStage extends Component {
  state = {
    isEditable: true,
  }

  play = () => {
    const { deactivateAuto, isActive, startScan } = this.props;
    deactivateAuto();
    if (!isActive) startScan();
  }

  playAuto = () => {
    const { activateAuto, isActive, startScan } = this.props;
    activateAuto();
    if (!isActive) startScan();
  }

  setEditableCanvas = () => {
    const { resetCanvas } = this.props;
    this.setState({
      isEditable: true,
    });
    resetCanvas();
  }

  render() {
    const {
      onStageClick,
      scanStep,
      pointCount,
      clearPoints,
      isActive,
      isAuto,
    } = this.props;
    const { isEditable } = this.state;
    return (
      <main className="stage">
        <ResponsiveStage
          className="canvas"
          onClick={isEditable ? onStageClick : null}
        >
          {/* Note that with how React-Konva works, PointLayer MUST come after
          LineLayer if we want the z-index of PointLayer to be higher. See:
          https://github.com/konvajs/react-konva/issues/73 */}
          <LineLayerContainer />
          <PointLayerContainer />
        </ResponsiveStage>
        <p className={`stage__text ${pointCount > 0 ? 'fade' : ''}`}>Add a point by clicking on the screen!</p>
        <menu className="stage__btn-container">
          <ToolTipButton purpose="clear-all" onClick={clearPoints} disabled={!isEditable} />
          <ToolTipButton purpose="play" onClick={this.play} disabled={!isAuto && isActive} />
          <ToolTipButton purpose="play-auto" onClick={this.playAuto} disabled={isAuto && isActive} />
          <ToolTipButton purpose="edit-canvas" onClick={this.setEditableCanvas} disabled={isEditable || isActive } />
        </menu>
      </main>
    );
  }
}

InteractiveStage.propTypes = {
  onStageClick: PropTypes.func,
  resetCanvas: PropTypes.func,
  clearPoints: PropTypes.func,
  activateAuto: PropTypes.func,
  deactivateAuto: PropTypes.func,
  pointCount: PropTypes.number,
  isActive: PropTypes.bool,
  isAuto: PropTypes.bool,
};

InteractiveStage.defaultProps = {
  onStageClick: () => null,
  resetCanvas: () => null,
  clearPoints: () => null,
  activateAuto: () => null,
  deactivateAuto: () => null,
  pointCount: 0,
  isActive: false,
  isAuto: false,
};

export default InteractiveStage;
