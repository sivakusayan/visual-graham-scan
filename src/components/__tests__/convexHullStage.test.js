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
  it('should have a layer with classname "point-layer"', () => {
    const wrapper = shallow(<ConvexHullStage />);

    expect(wrapper.find('.point-layer').exists()).toEqual(true);
  });
  it('should have a layer with classname "line-layer"', () => {
    const wrapper = shallow(<ConvexHullStage />);

    expect(wrapper.find('.line-layer').exists()).toEqual(true);
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

    wrapper.simulate('click', event);
    wrapper.simulate('click', event);

    expect(addPointSpy).toHaveBeenCalledTimes(2);
  });
  it('should dispense an action to clear all points when the clear all button is clicked', () => {
    const clearPointsSpy = jest.fn();
    const wrapper = shallow(<ConvexHullStage clearPoints={clearPointsSpy} />);

    wrapper.find('.clear-all').simulate('click');

    expect(clearPointsSpy).toHaveBeenCalled();
  });
  it('should add a circle to the point-layer whenever a point is added to state', () => {
    const wrapper = shallow(<ConvexHullStage points={[]} />);
    const instance = wrapper.instance();
    const point = {
      x: 0,
      y: 0,
      id: 10,
    };

    jest.spyOn(instance, 'renderPoint');
    wrapper.setProps({ points: [point] }).update();

    expect(instance.renderPoint).toHaveBeenCalled();
  });
  it('should clear all circles from the point-layer when all points are cleared from state', () => {
    const point = {
      x: 0,
      y: 0,
      id: 10,
    };
    const wrapper = shallow(<ConvexHullStage points={[point]} />);
    const instance = wrapper.instance();

    jest.spyOn(instance, 'clearRenderedPoints');
    wrapper.setProps({ points: [] }).update();

    expect(instance.renderPoint).toHaveBeenCalled();
  });
});
