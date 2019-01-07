import React from 'react';
import { shallow } from 'enzyme';

import PreparationControls from '../../components/PreparationControls';
import ToolTipButton from '../../components/ToolTipButton';
import { GET_START_POINT, DONE } from '../../__constants__/SCAN_STEPS';

describe('GrahamScan Controls', () => {
  it('should have a data-tool-tip attribute for every .btn ToolTipButton', () => {
    const wrapper = shallow(<PreparationControls />);
    const buttons = wrapper.find('.btn');
    expect(buttons.filterWhere(button => button.prop('data-tool-tip'))).toHaveLength(buttons.length);
  });
  it('should render a clear-all ToolTipButton', () => {
    const wrapper = shallow(<PreparationControls />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'clear-all');
    expect(button).toHaveLength(1);
  });
  it('should enable the clear-all button while isEditable is true', () => {
    const wrapper = shallow(<PreparationControls isEditable />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'clear-all');
    expect(button.prop('disabled')).toBe(false);
  });
  it('should disable the clear-all button while isEditable is false', () => {
    const wrapper = shallow(<PreparationControls />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'clear-all');
    expect(button.prop('disabled')).toBe(true);
  });
  it('should pass an onClick to clear-all ToolTipButton which clears all canvas entities', () => {
    const clearAllSpy = jest.fn();
    const wrapper = shallow(<PreparationControls clearAll={clearAllSpy} />);

    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'clear-all');
    button.simulate('click');

    expect(clearAllSpy).toHaveBeenCalled();
  });
  it('should render a play ToolTipButton', () => {
    const wrapper = shallow(<PreparationControls />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play');
    expect(button).toHaveLength(1);
  });
  it(`should enable the play ToolTipButton while isEditable is true or step isn't ${DONE} and isAuto is true`, () => {
    const wrapper = shallow(<PreparationControls step={DONE} />);
    let button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play');
    expect(button.prop('disabled')).toBe(false);

    wrapper.setProps({ isEditable: false, isAuto: true, step: GET_START_POINT });
    button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play');
    expect(button.prop('disabled')).toBe(false);
  });
  it(`should disable the play ToolTipButton while step isn't ${DONE} and isAuto is false`, () => {
    const wrapper = shallow(<PreparationControls step={GET_START_POINT} />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play');
    expect(button.prop('disabled')).toBe(true);
  });
  it('should pass an onClick to play ToolTipButton which calls play', () => {
    const playSpy = jest.fn();
    const wrapper = shallow(<PreparationControls play={playSpy} />);

    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play');
    button.simulate('click');

    expect(playSpy).toHaveBeenCalled();
  });
  it('should render a play-auto ToolTipButton', () => {
    const wrapper = shallow(<PreparationControls />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play-auto');
    expect(button).toHaveLength(1);
  });
  it(`should enable the play-auto ToolTipButton while isEditable is true or step isn't ${DONE} and isAuto is false`, () => {
    const wrapper = shallow(<PreparationControls step={DONE} />);
    let button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play-auto');
    expect(button.prop('disabled')).toBe(false);

    wrapper.setProps({ step: GET_START_POINT, isAuto: false });
    button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play-auto');
    expect(button.prop('disabled')).toBe(false);
  });
  it('should disable the play-auto ToolTipButton while isActive and isAuto is true', () => {
    const wrapper = shallow(<PreparationControls step={GET_START_POINT} isAuto />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play-auto');
    expect(button.prop('disabled')).toBe(true);
  });
  it('should pass an onClick to play-auto ToolTipButton which calls playAuto', () => {
    const playAutoSpy = jest.fn();
    const wrapper = shallow(<PreparationControls playAuto={playAutoSpy} />);

    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play-auto');
    button.simulate('click');

    expect(playAutoSpy).toHaveBeenCalled();
  });
  it(`should enable the edit-canvas button if step is ${DONE} and isEditable is false`, () => {
    const wrapper = shallow(<PreparationControls step={DONE} />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'edit-canvas');
    expect(button.prop('disabled')).toBe(false);
  });
  it(`should disable the edit-canvas button if step isn't ${DONE} or isEditable is true`, () => {
    const wrapper = shallow(<PreparationControls step={GET_START_POINT} />);
    let button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'edit-canvas');
    expect(button.prop('disabled')).toBe(true);

    wrapper.setProps({ step: DONE, isEditable: true });
    button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'edit-canvas');
    expect(button.prop('disabled')).toBe(true);
  });
  it('should pass an onClick to edit-canvas ToolTipButton which sets isEditable to true', () => {
    const activateEditsSpy = jest.fn();
    const wrapper = shallow(<PreparationControls activateEdits={activateEditsSpy} />);

    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'edit-canvas');
    button.simulate('click');

    expect(activateEditsSpy).toHaveBeenCalled();
  });
});