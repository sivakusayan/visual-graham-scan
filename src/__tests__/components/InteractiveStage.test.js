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
  it('should respond to users clicks while isEditable is true', () => {
    const onStageClickSpy = jest.fn();
    const wrapper = shallow(<InteractiveStage onStageClick={onStageClickSpy} />);
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

    expect(onStageClickSpy).toHaveBeenCalledTimes(2);
  });
  it('should not respond to users clicks if isEditable is false', () => {
    const onStageClickSpy = jest.fn();
    const wrapper = shallow(<InteractiveStage onStageClick={onStageClickSpy} />);
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

    expect(onStageClickSpy).toHaveBeenCalledTimes(0);
  });
  it('should have a data-tool-tip attribute for every .btn ToolTipButton', () => {
    const wrapper = shallow(<InteractiveStage />);
    const buttons = wrapper.find('.btn');
    expect(buttons.filterWhere(button => button.prop('data-tool-tip'))).toHaveLength(buttons.length);
  });
  it('should render a clear-all ToolTipButton', () => {
    const wrapper = shallow(<InteractiveStage />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'clear-all');
    expect(button).toHaveLength(1);
  });
  it('should enable the clear-all button while isEditable is true', () => {
    const wrapper = shallow(<InteractiveStage />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'clear-all');
    expect(button.prop('disabled')).toBe(false);
  });
  it('should disable the clear-all button while isEditable is false', () => {
    const wrapper = shallow(<InteractiveStage />);
    wrapper.setState({ isEditable: false });
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'clear-all');
    expect(button.prop('disabled')).toBe(true);
  });
  it('should pass an onClick to clear-all ToolTipButton which clears all points on the canvas', () => {
    const clearPointsSpy = jest.fn();
    const wrapper = shallow(<InteractiveStage clearPoints={clearPointsSpy} />);

    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'clear-all');
    button.prop('onClick')();

    expect(clearPointsSpy).toHaveBeenCalled();
  });
  it('should render a play ToolTipButton', () => {
    const wrapper = shallow(<InteractiveStage />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play');
    expect(button).toHaveLength(1);
  });
  it('should enable the play ToolTipButton while isEditable is true or isActive and isAuto is true', () => {
    const wrapper = shallow(<InteractiveStage />);
    let button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play');
    expect(button.prop('disabled')).toBe(false);

    wrapper.setProps({ isActive: true, isAuto: true });
    button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play');
    expect(button.prop('disabled')).toBe(false);
  });
  it('should disable the play ToolTipButton while isActive and !isAuto is true', () => {
    const wrapper = shallow(<InteractiveStage isActive />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play');
    expect(button.prop('disabled')).toBe(true);
  });
  it('should pass an onClick to play ToolTipButton which starts the scan and sets doAuto to false', () => {
    const startScanSpy = jest.fn();
    const deactivateAutoSpy = jest.fn();
    const wrapper = shallow(<InteractiveStage deactivateAuto={deactivateAutoSpy} startScan={startScanSpy} />);

    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play');
    button.prop('onClick')();

    expect(startScanSpy).toHaveBeenCalled();
    expect(deactivateAutoSpy).toHaveBeenCalled();
  });
  it('should pass an onClick to play-auto ToolTipButton that won\'t restart scan while isActive is true', () => {
    const startScanSpy = jest.fn();
    const wrapper = shallow(<InteractiveStage isActive startScan={startScanSpy} />);

    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play');
    button.prop('onClick')();

    expect(startScanSpy).toHaveBeenCalledTimes(0);
  });
  it('should render a play-auto ToolTipButton', () => {
    const wrapper = shallow(<InteractiveStage />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play-auto');
    expect(button).toHaveLength(1);
  });
  it('should enable the play-auto ToolTipButton while isEditable is true or isActive and !isAuto is true', () => {
    const wrapper = shallow(<InteractiveStage />);
    let button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play-auto');
    expect(button.prop('disabled')).toBe(false);

    wrapper.setProps({ isActive: true, isAuto: false });
    button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play-auto');
    expect(button.prop('disabled')).toBe(false);
  });
  it('should disable the play-auto ToolTipButton while isActive and isAuto is true', () => {
    const wrapper = shallow(<InteractiveStage isActive isAuto />);
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play-auto');
    expect(button.prop('disabled')).toBe(true);
  });
  it('should pass an onClick to play-auto ToolTipButton which starts the scan and sets doAuto to true', () => {
    const activateAutoSpy = jest.fn();
    const startScanSpy = jest.fn();
    const wrapper = shallow(
      <InteractiveStage
        activateAuto={activateAutoSpy}
        startScan={startScanSpy}
      />,
    );

    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play-auto');
    button.prop('onClick')();

    expect(startScanSpy).toHaveBeenCalled();
    expect(activateAutoSpy).toHaveBeenCalled();
  });
  it('should pass an onClick to play-auto ToolTipButton that won\'t restart scan while isActive is true', () => {
    const startScanSpy = jest.fn();
    const wrapper = shallow(<InteractiveStage isActive startScan={startScanSpy} />);

    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'play');
    button.prop('onClick')();

    expect(startScanSpy).toHaveBeenCalledTimes(0);
  });
  it('should enable the edit-canvas button if isActive is false and isEditable is false', () => {
    const wrapper = shallow(<InteractiveStage />);
    wrapper.setState({ isEditable: false });
    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'edit-canvas');
    expect(button.prop('disabled')).toBe(false);
  });
  it('should disable the edit-canvas button if isActive is true or isEditable is true', () => {
    const wrapper = shallow(<InteractiveStage isActive />);
    let button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'edit-canvas');
    expect(button.prop('disabled')).toBe(true);

    wrapper.setProps({ isActive: false });
    wrapper.setState({ isEditable: true });
    button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'edit-canvas');
    expect(button.prop('disabled')).toBe(true);
  });
  it('should pass an onClick to edit-canvas ToolTipButton which sets isEditable to true', () => {
    const wrapper = shallow(<InteractiveStage />);
    wrapper.setState({ isEditable: false });

    const button = wrapper.find(ToolTipButton).filterWhere(node => node.prop('purpose') === 'edit-canvas');
    button.prop('onClick')();

    expect(wrapper.state('isEditable')).toBe(true);
  });
});
