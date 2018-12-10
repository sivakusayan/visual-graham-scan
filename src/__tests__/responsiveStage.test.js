import React from 'react';
import { shallow } from 'enzyme';

import ResponsiveStage  from '../components/ResponsiveStage';

describe('Responsive Stage', () => {
  it('should render', () => {
    const wrapper = shallow(<ResponsiveStage />);
    console.log(wrapper.debug());
  });
});
