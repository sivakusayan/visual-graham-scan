import React from 'react';
import { shallow } from 'enzyme';

import PreparationControls from '../../components/PreparationControls';
import ToolTipButton from '../../components/ToolTipButton';
import { GET_START_POINT, DONE } from '../../__constants__/SCAN_STEPS';

describe('GrahamScan Controls', () => {
  it(`should not have the fade class while step is ${DONE}`, () => {
    const wrapper = shallow(<PreparationControls step={DONE} />);
    const menu = wrapper.find('menu.controls');
    expect(menu.hasClass('fade')).toBe(false);
  });
  it(`should have the fade class while step isn't ${DONE}`, () => {
    const wrapper = shallow(<PreparationControls step={GET_START_POINT} />);
    const menu = wrapper.find('menu.controls');
    expect(menu.hasClass('fade')).toBe(true);
  });
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
  it(`should enable the clear-all button while step is ${DONE}`, () => {
    const wrapper = shallow(<PreparationControls step={DONE} />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'clear-all');
    expect(button.prop('disabled')).toBe(false);
  });
  it(`should disable the clear-all button while step isn't ${DONE}`, () => {
    const wrapper = shallow(<PreparationControls step={GET_START_POINT} />);
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
  it(`should enable the play ToolTipButton while step is ${DONE} `, () => {
    const wrapper = shallow(<PreparationControls step={DONE} />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play');
    expect(button.prop('disabled')).toBe(false);
  });
  it(`should disable the play ToolTipButton while step isn't ${DONE}`, () => {
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
  it(`should disable the play-auto ToolTipButton while step isn't ${DONE}`, () => {
    const wrapper = shallow(<PreparationControls step={GET_START_POINT} />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play-auto');
    expect(button.prop('disabled')).toBe(true);
  });
  it(`should enable the play-auto ToolTipButton while step is ${DONE}`, () => {
    const wrapper = shallow(<PreparationControls step={DONE} />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play-auto');
    expect(button.prop('disabled')).toBe(false);
  });
  it('should pass an onClick to play-auto ToolTipButton which calls playAuto', () => {
    const playAutoSpy = jest.fn();
    const wrapper = shallow(<PreparationControls playAuto={playAutoSpy} />);

    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play-auto');
    button.simulate('click');

    expect(playAutoSpy).toHaveBeenCalled();
  });
  it('should render a generate-points ToolTipButton', () => {
    const wrapper = shallow(<PreparationControls />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'generate-points');

    expect(button.exists()).toBe(true);
  });
  it(`should enable the generate-points button if step is ${DONE}`, () => {
    const wrapper = shallow(<PreparationControls step={DONE} />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'generate-points');
    expect(button.prop('disabled')).toBe(false);
  });
  it(`should disable the generate-points button if step isn't ${DONE}`, () => {
    const wrapper = shallow(<PreparationControls step={GET_START_POINT} />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'generate-points');
    expect(button.prop('disabled')).toBe(true);
  });
});
