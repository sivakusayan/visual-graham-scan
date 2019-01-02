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

describe('InteractiveStage Component', () => {
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
    const wrapper = shallow(<InteractiveStage onStageClick={onStageClickSpy} isEditable />);
    const event = {
      target: {
        getPointerPosition: () => ({
          x: 10,
          y: 20,
        }),
        attrs: {
          scaleX: 2,
          scaleY: 2,
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
});
