/**
 * @fileoverview A responsive wrapper around Konva Stage that allows the user
 * to set points on the canvas.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import ResponsiveStage from './ResponsiveStage';
import PointLayerContainer from '../containers/Layers/PointLayerContainer';
import LineLayerContainer from '../containers/Layers/LineLayerContainer';
import rescaleCoordinate from '../utils/rescaleCoordinate';

class InteractiveStage extends Component {
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

  clearAllShapes = () => {
    const { clearPoints, clearLines } = this.props;
    clearPoints();
    clearLines();
  }

  render() {
    const { scanIsActive } = this.props;
    return (
      <main>
        <ResponsiveStage
          className="canvas"
          onClick={!scanIsActive ? this.onClick : null}
        >
          {/* Note that with how React-Konva works, PointLayer MUST come after
          LineLayer if we want the z-index of PointLayer to be higher. See:
          https://github.com/konvajs/react-konva/issues/73 */}
          <LineLayerContainer />
          <PointLayerContainer />
        </ResponsiveStage>
        {!scanIsActive && (
          <button
            type="button"
            data-tool-tip="Clear All"
            className="btn btn--icon clear-all"
            onClick={this.clearAllShapes}
          >
            <svg className="btn--icon__icon">
              <use href="img/spritesheet.svg#cancel" />
            </svg>
          </button>
        )}
      </main>
    );
  }
}

InteractiveStage.propTypes = {
  addPoint: PropTypes.func,
  clearPoints: PropTypes.func,
  clearLines: PropTypes.func,
  scanIsActive: PropTypes.bool,
};

InteractiveStage.defaultProps = {
  addPoint: () => null,
  clearPoints: () => null,
  clearLines: () => null,
  scanIsActive: false,
};

export default InteractiveStage;
