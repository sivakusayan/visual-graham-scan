import React from 'react';
import { shallow } from 'enzyme';

import ScanControls from '../../components/ScanControls';
import ToolTipButton from '../../components/ToolTipButton';
import { GET_START_POINT, DONE } from '../../__constants__/SCAN_STEPS';

describe('Scan Controls', () => {
  it(`should have the fade class while step is ${DONE}`, () => {
    const wrapper = shallow(<ScanControls step={DONE} />);
    const menu = wrapper.find('menu.controls');
    expect(menu.hasClass('fade')).toBe(true);
  });
  it(`should not have the fade class while step isn't ${DONE}`, () => {
    const wrapper = shallow(<ScanControls step={GET_START_POINT} />);
    const menu = wrapper.find('menu.controls');
    expect(menu.hasClass('fade')).toBe(false);
  });
  it('should render a next-step ToolTipButton', () => {
    const wrapper = shallow(<ScanControls />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'next-step');
    expect(button).toHaveLength(1);
  });
  it('should call makeNextStep when the next-step ToolTipButton is clicked', () => {
    const makeNextStepSpy = jest.fn();
    const wrapper = shallow(<ScanControls makeNextStep={makeNextStepSpy} />);

    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'next-step');
    button.simulate('click');

    expect(makeNextStepSpy).toHaveBeenCalled();
  });
  it(`should disable the next-step ToolTipButton while step is ${DONE}`, () => {
    const wrapper = shallow(<ScanControls step={DONE} />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'next-step');
    expect(button.prop('disabled')).toBe(true);
  });
  it(`should enable the next-step ToolTipButton while step isn't ${DONE}`, () => {
    const wrapper = shallow(<ScanControls step={GET_START_POINT} />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'next-step');
    expect(button.prop('disabled')).toBe(false);
  });
  it('should render a switch-mode ToolTipButton', () => {
    const wrapper = shallow(<ScanControls />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'switch-mode');
    expect(button).toHaveLength(1);
  });
  it('should call switchMode when the switch-mode ToolTipButton is clicked', () => {
    const switchModeSpy = jest.fn();
    const wrapper = shallow(<ScanControls switchMode={switchModeSpy} />);

    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'next-step');
    button.simulate('click');

    expect(switchModeSpy).toHaveBeenCalled();
  });
  it(`should disable the switch-mode ToolTipButton while step is ${DONE}`, () => {
    const wrapper = shallow(<ScanControls step={DONE} />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'next-step');
    expect(button.prop('disabled')).toBe(true);
  });
  it(`should enable the switch-mode ToolTipButton while step isn't ${DONE}`, () => {
    const wrapper = shallow(<ScanControls step={GET_START_POINT} />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'switch-mode');
    expect(button.prop('disabled')).toBe(false);
  });
});
