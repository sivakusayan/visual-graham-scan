import React from 'react';
import { shallow } from 'enzyme';

import ConvexHullStage from '../ConvexHullStage';


describe('Convex Hull Stage Component', () => {
  it('should have a layer with classname "point-layer"', () => {
    const wrapper = shallow(<ConvexHullStage />);

    expect(wrapper.find('.point-layer').exists()).toEqual(true);
  });
  it('should have a layer with classname "line-layer"', () => {
    const wrapper = shallow(<ConvexHullStage />);

    expect(wrapper.find('.line-layer').exists()).toEqual(true);
  });
  it('should render a circle in the point layer when clicked', () => {
    const wrapper = shallow(<ConvexHullStage />);
    const lineLayer = wrapper.find('.point-layer');
  });
});
