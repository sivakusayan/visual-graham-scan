import React from 'react';
import { shallow } from 'enzyme';

import GrahamScanDriver from '../../components/GrahamScanDriver';
import ToolTipButton from '../../components/ToolTipButton';
import {
  GET_START_POINT,
  SORT_POINTS,
  ADD_NEXT_POINT,
  FIX_RIGHT_TURN,
  DONE,
} from '../../__constants__/SCAN_STEPS';
import SCAN_STEP_DESCRIPTIONS from '../../__constants__/SCAN_STEP_DESCRIPTIONS';

describe('GrahamScanDriver Component', () => {
  describe('Driver Text', () => {
    it(`should render the correct text during scan step ${GET_START_POINT}`, () => {
      const wrapper = shallow(<GrahamScanDriver isActive scanStep={GET_START_POINT} />);
      expect(wrapper.find('.driver__text').text()).toMatch(SCAN_STEP_DESCRIPTIONS[GET_START_POINT]);
    });
    it(`should render the correct text during scan step ${SORT_POINTS}`, () => {
      const wrapper = shallow(<GrahamScanDriver isActive scanStep={SORT_POINTS} />);
      expect(wrapper.find('.driver__text').text()).toMatch(SCAN_STEP_DESCRIPTIONS[SORT_POINTS]);
    });
    it(`should render the correct text during scan step ${ADD_NEXT_POINT}`, () => {
      const wrapper = shallow(<GrahamScanDriver isActive scanStep={ADD_NEXT_POINT} />);
      expect(wrapper.find('.driver__text').text()).toMatch(SCAN_STEP_DESCRIPTIONS[ADD_NEXT_POINT]);
    });
    it(`should render the correct text during scan step ${FIX_RIGHT_TURN}`, () => {
      const wrapper = shallow(<GrahamScanDriver isActive scanStep={FIX_RIGHT_TURN} />);
      expect(wrapper.find('.driver__text').text()).toMatch(SCAN_STEP_DESCRIPTIONS[FIX_RIGHT_TURN]);
    });
    it(`should render the correct text during scan step ${DONE}`, () => {
      const wrapper = shallow(<GrahamScanDriver isActive scanStep={DONE} />);
      expect(wrapper.find('.driver__text').text()).toMatch(SCAN_STEP_DESCRIPTIONS[DONE]);
    });
  });
  describe('Driver Buttons', () => {
    it('should have a data-tool-tip attribute for every .btn ToolTipButton', () => {
      const wrapper = shallow(<GrahamScanDriver />);
      const buttons = wrapper.find('.btn');
      expect(buttons.filterWhere(button => button.prop('data-tool-tip'))).toHaveLength(buttons.length);
    });
    it('should render a clear-all ToolTipButton', () => {
      const wrapper = shallow(<GrahamScanDriver />);
      const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'clear-all');
      expect(button).toHaveLength(1);
    });
    it('should enable the clear-all button while isEditable is true', () => {
      const wrapper = shallow(<GrahamScanDriver isEditable />);
      const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'clear-all');
      expect(button.prop('disabled')).toBe(false);
    });
    it('should disable the clear-all button while isEditable is false', () => {
      const wrapper = shallow(<GrahamScanDriver />);
      const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'clear-all');
      expect(button.prop('disabled')).toBe(true);
    });
    it('should pass an onClick to clear-all ToolTipButton which clears all points on the canvas', () => {
      const clearPointsSpy = jest.fn();
      const wrapper = shallow(<GrahamScanDriver clearPoints={clearPointsSpy} />);

      const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'clear-all');
      button.simulate('click');

      expect(clearPointsSpy).toHaveBeenCalled();
    });
    it('should render a play ToolTipButton', () => {
      const wrapper = shallow(<GrahamScanDriver />);
      const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play');
      expect(button).toHaveLength(1);
    });
    it('should enable the play ToolTipButton while isEditable is true or isActive and isAuto is true', () => {
      const wrapper = shallow(<GrahamScanDriver />);
      let button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play');
      expect(button.prop('disabled')).toBe(false);

      wrapper.setProps({ isActive: true, isAuto: true });
      button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play');
      expect(button.prop('disabled')).toBe(false);
    });
    it('should disable the play ToolTipButton while isActive and !isAuto is true', () => {
      const wrapper = shallow(<GrahamScanDriver isActive />);
      const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play');
      expect(button.prop('disabled')).toBe(true);
    });
    it('should pass an onClick to play ToolTipButton which calls play', () => {
      const playSpy = jest.fn();
      const wrapper = shallow(<GrahamScanDriver play={playSpy} />);

      const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play');
      button.simulate('click');

      expect(playSpy).toHaveBeenCalled();
    });
    it('should render a play-auto ToolTipButton', () => {
      const wrapper = shallow(<GrahamScanDriver />);
      const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play-auto');
      expect(button).toHaveLength(1);
    });
    it('should enable the play-auto ToolTipButton while isEditable is true or isActive and !isAuto is true', () => {
      const wrapper = shallow(<GrahamScanDriver />);
      let button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play-auto');
      expect(button.prop('disabled')).toBe(false);

      wrapper.setProps({ isActive: true, isAuto: false });
      button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play-auto');
      expect(button.prop('disabled')).toBe(false);
    });
    it('should disable the play-auto ToolTipButton while isActive and isAuto is true', () => {
      const wrapper = shallow(<GrahamScanDriver isActive isAuto />);
      const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play-auto');
      expect(button.prop('disabled')).toBe(true);
    });
    it('should pass an onClick to play-auto ToolTipButton which calls playAuto', () => {
      const playAutoSpy = jest.fn();
      const wrapper = shallow(<GrahamScanDriver playAuto={playAutoSpy} />);

      const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play-auto');
      button.simulate('click');

      expect(playAutoSpy).toHaveBeenCalled();
    });
    it('should enable the edit-canvas button if isActive is false and isEditable is false', () => {
      const wrapper = shallow(<GrahamScanDriver />);
      const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'edit-canvas');
      expect(button.prop('disabled')).toBe(false);
    });
    it('should disable the edit-canvas button if isActive is true or isEditable is true', () => {
      const wrapper = shallow(<GrahamScanDriver isActive />);
      let button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'edit-canvas');
      expect(button.prop('disabled')).toBe(true);

      wrapper.setProps({ isActive: false, isEditable: true });
      button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'edit-canvas');
      expect(button.prop('disabled')).toBe(true);
    });
    it('should pass an onClick to edit-canvas ToolTipButton which sets isEditable to true', () => {
      const activateEditsSpy = jest.fn();
      const wrapper = shallow(<GrahamScanDriver activateEdits={activateEditsSpy} />);

      const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'edit-canvas');
      button.simulate('click');

      expect(activateEditsSpy).toHaveBeenCalled();
    });
  });
});
