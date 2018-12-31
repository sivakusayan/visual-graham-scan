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
import rescaleCoordinate from '../utils/rescaleCoordinate';
import { DONE } from '../__constants__/SCAN_STEPS';

class InteractiveStage extends Component {
  state = {
    isEditable: true,
  }

  onClick = (event) => {
    const { addPoint } = this.props;
    const stage = event.target;
    const pointerPosition = stage.getPointerPosition();

    const point = {
      x: rescaleCoordinate(stage, pointerPosition.x),
      y: pointerPosition.y,
    };

    addPoint(point);
  }

  resetCanvas = () => {
    const { clearLines, resetPoints } = this.props;
    clearLines();
    resetPoints();
  }

  startScan = () => {
    const { activateScan } = this.props;
    this.setState({
      isEditable: false,
    });
    this.resetCanvas();
    activateScan();
  }

  play = () => {
    const { deactivateAuto, isActive } = this.props;
    deactivateAuto();
    if (!isActive) this.startScan();
  }

  playAuto = () => {
    const { activateScan, activateAuto, isActive } = this.props;
    activateAuto();
    if (!isActive) this.startScan();
  }

  setEditableCanvas = () => {
    this.setState({
      isEditable: true,
    });
    this.resetCanvas();
  }

  render() {
    const {
      pointCount,
      clearPoints,
      scanStep,
      isActive,
      isAuto,
    } = this.props;
    const { isEditable } = this.state;
    return (
      <main className="stage">
        <ResponsiveStage
          className="canvas"
          onClick={isEditable ? this.onClick : null}
        >
          {/* Note that with how React-Konva works, PointLayer MUST come after
          LineLayer if we want the z-index of PointLayer to be higher. See:
          https://github.com/konvajs/react-konva/issues/73 */}
          <LineLayerContainer />
          <PointLayerContainer />
        </ResponsiveStage>
        {pointCount === 0 && (
          <p className="stage__text">Add a point by clicking on the screen!</p>
        )}
        <menu className="stage__btn-container">
          <ToolTipButton purpose="clear-all" onClick={clearPoints} disabled={!isEditable} />
          <ToolTipButton purpose="play" onClick={this.play} disabled={!isAuto && isActive} />
          <ToolTipButton purpose="play-auto" onClick={this.playAuto} disabled={isAuto && isActive} />
          <ToolTipButton purpose="edit-canvas" onClick={this.setEditableCanvas} disabled={isEditable || scanStep !== DONE} />
        </menu>
      </main>
    );
  }
}

InteractiveStage.propTypes = {
  addPoint: PropTypes.func,
  clearPoints: PropTypes.func,
  resetPoints: PropTypes.func,
  clearLines: PropTypes.func,
  activateScan: PropTypes.func,
  activateAuto: PropTypes.func,
  deactivateAuto: PropTypes.func,
  pointCount: PropTypes.number,
  isActive: PropTypes.bool,
  isAuto: PropTypes.bool,
};

InteractiveStage.defaultProps = {
  addPoint: () => null,
  clearPoints: () => null,
  resetPoints: () => null,
  clearLines: () => null,
  activateScan: () => null,
  activateAuto: () => null,
  deactivateAuto: () => null,
  pointCount: 0,
  isActive: false,
  isAuto: false,
};

export default InteractiveStage;
