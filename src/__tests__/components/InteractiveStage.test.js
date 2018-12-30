/**
 * @fileoverview Tests for the InteractiveStage component.
 * Note that since we are testing a canvas based component, many
 * of enzyme's functions will not work as we expect. Therefore we
 * test user interactions using spies instead of checking for
 * differences in the UI.
 */

import React from 'react';
import { shallow } from 'enzyme';

import InteractiveStage from '../../components/InteractiveStage';
import ResponsiveStage from '../../components/ResponsiveStage';
import PointLayerContainer from '../../containers/Layers/PointLayerContainer';
import LineLayerContainer from '../../containers/Layers/LineLayerContainer';
import ToolTipButton from '../../components/ToolTipButton';
import { DONE, GET_START_POINT } from '../../__constants__/SCAN_STEPS';

describe('Convex Hull Stage Component', () => {
  it('should initialize isEditable to true', () => {
    const wrapper = shallow(<InteractiveStage />);
    expect(wrapper.state('isEditable')).toBe(true);
  });
  it('should render a ResponsiveStage for its canvas', () => {
    const wrapper = shallow(<InteractiveStage />);
    expect(wrapper.find(ResponsiveStage).exists()).toBe(true);
  });
  it('should render a layer for points', () => {
    const wrapper = shallow(<InteractiveStage />);
    expect(wrapper.find(PointLayerContainer).exists()).toBe(true);
  });
  it('should render a layer for lines', () => {
    const wrapper = shallow(<InteractiveStage />);
    expect(wrapper.find(LineLayerContainer).exists()).toBe(true);
  });
  it('should dispense an action to add a point whenever clicked', () => {
    const addPointSpy = jest.fn();
    const wrapper = shallow(<InteractiveStage addPoint={addPointSpy} />);
    const event = {
      target: {
        getPointerPosition: () => ({
          x: 10,
          y: 20,
        }),
        attrs: {
          scaleX: 2,
        },
      },
    };

    wrapper.find(ResponsiveStage).simulate('click', event);
    wrapper.find(ResponsiveStage).simulate('click', event);

    expect(addPointSpy).toHaveBeenCalledTimes(2);
  });
  it('should not respond to users clicks if isEditable is false', () => {
    const addPointSpy = jest.fn();
    const wrapper = shallow(<InteractiveStage addPoint={addPointSpy} />);
    wrapper.setState({ isEditable: false });
    const event = {
      target: {
        getPointerPosition: () => ({
          x: 10,
          y: 20,
        }),
        attrs: {
          scaleX: 2,
        },
      },
    };

    wrapper.find(ResponsiveStage).simulate('click', event);
    wrapper.find(ResponsiveStage).simulate('click', event);

    expect(addPointSpy).toHaveBeenCalledTimes(0);
  });
  it('should dispense an action to clear all points from view when the clear-all button is clicked', () => {
    const clearPointsSpy = jest.fn();
    const wrapper = shallow(<InteractiveStage clearPoints={clearPointsSpy} />);

    wrapper.find('.clear-all').simulate('click');

    expect(clearPointsSpy).toHaveBeenCalled();
  });
  it('should not render the clear-all button while isEditable is false', () => {
    const wrapper = shallow(<InteractiveStage />);
    wrapper.setState({ isEditable: false });
    expect(wrapper.find('.clear-all').exists()).toBe(false);
  });
  it('should have a data-tool-tip attribute for every .btn ToolTipButton', () => {
    const wrapper = shallow(<InteractiveStage />);
    const buttons = wrapper.find('.btn');
    expect(buttons.filterWhere(button => button.prop('data-tool-tip'))).toHaveLength(buttons.length);
  });
  it('should render a play ToolTipButton', () => {
    const wrapper = shallow(<InteractiveStage />);
    expect(wrapper.find('button.play').exists()).toBe(true);
  });
  it('should activate the scan when play button is clicked', () => {
    const activateScanSpy = jest.fn();
    const wrapper = shallow(<InteractiveStage activateScan={activateScanSpy} />);
    const button = wrapper.find('button.play');
    button.simulate('click');

    expect(activateScanSpy).toHaveBeenCalled();
  });
  it('should render a play-auto ToolTipButton', () => {
    const wrapper = shallow(<InteractiveStage />);
    expect(wrapper.find('button.play-auto').exists()).toBe(true);
  });
  it('should activate the scan and set doAuto to true when play-auto button is clicked', () => {
    const setAutoSpy = jest.fn();
    const activateScanSpy = jest.fn();
    const wrapper = shallow(
      <InteractiveStage
        setAuto={setAutoSpy}
        activateScan={activateScanSpy}
      />,
    );
    const button = wrapper.find('button.play-auto');
    button.simulate('click');

    expect(setAutoSpy).toHaveBeenCalled();
    expect(activateScanSpy).toHaveBeenCalled();
  });
  it(`should render a edit-canvas button if scanStep is ${DONE} and isEditable is false`, () => {
    const wrapper = shallow(<InteractiveStage scanStep={DONE} />);
    wrapper.setState({ isEditable: false });
    expect(wrapper.find('button.edit-canvas').exists()).toBe(true);
  });
  it(`should not render a edit-canvas button if scanStep is not ${DONE} or isEditable is true`, () => {
    const wrapper = shallow(<InteractiveStage scanStep={GET_START_POINT} />);

    expect(wrapper.find('button.edit-canvas').exists()).toBe(false);

    wrapper.setProps({ scanStep: DONE });
    wrapper.setState({ isEditable: true });
    expect(wrapper.find('button.edit-canvas').exists()).toBe(false);
  });
});
