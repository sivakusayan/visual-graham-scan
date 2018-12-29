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

describe('Convex Hull Stage Component', () => {
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
  it('should not respond to users clicks if scan is active', () => {
    const addPointSpy = jest.fn();
    const wrapper = shallow(<InteractiveStage scanIsActive addPoint={addPointSpy} />);
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
  it('should dispense an action to clear all shapes from view when the clear-all button is clicked', () => {
    const clearPointsSpy = jest.fn();
    const clearLinesSpy = jest.fn();
    const wrapper = shallow(
      <InteractiveStage
        clearPoints={clearPointsSpy}
        clearLines={clearLinesSpy}
      />,
    );

    wrapper.find('.clear-all').simulate('click');

    expect(clearPointsSpy).toHaveBeenCalled();
    expect(clearLinesSpy).toHaveBeenCalled();
  });
  it('should not render any btn--icon button while scan is active', () => {
    const wrapper = shallow(<InteractiveStage scanIsActive />);
    expect(wrapper.find('.btn--icon')).toHaveLength(0);
  });
  it('should have a data-tool-tip attribute for every btn--icon button', () => {
    const wrapper = shallow(<InteractiveStage />);
    const buttons = wrapper.find('.btn--icon');
    expect(buttons.filterWhere(button => button.prop('data-tool-tip'))).toHaveLength(buttons.length);
  });
});
