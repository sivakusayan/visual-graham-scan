/**
 * @fileoverview Tests for the ConvexHullStage component.
 * Note that since we are testing a canvas based component, many
 * of enzyme's functions will not work as we expect. Therefore we
 * test user interactions using spies instead of checking for
 * differences in the UI.
 */

import React from 'react';
import { shallow } from 'enzyme';

import ConvexHullStage from '../ConvexHullStage';

describe('Convex Hull Stage Component', () => {
  it('should render', () => {
    const wrapper = shallow(<ConvexHullStage />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should dispense an action to add a point whenever clicked', () => {
    const addPointSpy = jest.fn();
    const wrapper = shallow(<ConvexHullStage addPoint={addPointSpy} />);
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

    wrapper.find('.canvas').simulate('click', event);
    wrapper.find('.canvas').simulate('click', event);

    expect(addPointSpy).toHaveBeenCalledTimes(2);
  });
  it('should dispense an action to clear all shapes from view when the clear-all button is clicked', () => {
    const clearPointsSpy = jest.fn();
    const clearLinesSpy = jest.fn();
    const wrapper = shallow(
      <ConvexHullStage
        clearPoints={clearPointsSpy}
        clearLines={clearLinesSpy}
      />,
    );

    wrapper.find('.clear-all').simulate('click');

    expect(clearPointsSpy).toHaveBeenCalled();
    expect(clearLinesSpy).toHaveBeenCalled();
  });
});
