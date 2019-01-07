/**
 * @fileoverview We separate this file from the DriverContainer, where the connection
 * would normally be made, since the other file is reserved for the algorithm logic. Since
 * I don't want to make another folder just for one file, the containers folder is the
 * simplest place to keep this component for now.
 */

import {
  acceptPoint,
  rejectPoint,
  clearPoints,
  sortPoints,
  resetPoints,
} from '../state/actions/pointActions';
import { addLine, removeLine, clearLines } from '../state/actions/lineActions';
import { activateEdits, deactivateEdits } from '../state/actions/isEditableActions';
import connectWithStore from '../state/store/connectWithStore';

import DriverContainer from './DriverContainer';

const mapStateToProps = state => ({
  points: state.points,
  isActive: state.scanIsActive,
  isEditable: state.isEditable,
});

export default connectWithStore(mapStateToProps, {
  acceptPoint,
  rejectPoint,
  clearPoints,
  sortPoints,
  resetPoints,
  addLine,
  removeLine,
  clearLines,
  activateEdits,
  deactivateEdits,
})(DriverContainer);
