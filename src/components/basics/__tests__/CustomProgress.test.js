import React from 'react';
import { shallow } from 'enzyme';

import CustomProgress from '../CustomProgress';

describe('CustomProgress', function() {
  it('should render 5 spans', function() {
    let wrapper = shallow(<CustomProgress p={80} />);
    expect(wrapper.find('span').first().children().length).toEqual(5);
  });

  it('should have class floatRight', function() {
    let wrapper = shallow(<CustomProgress p={80} />);
    expect(wrapper.first().hasClass("floatRight")).toEqual(true);
  })

  it('should render value', function() {
    let wrapper = shallow(<CustomProgress p={80} />);
    expect(wrapper.text()).toEqual("★★★★☆");
  });

  it('should render max if superior or equal 100', function() {
    let wrapper = shallow(<CustomProgress p={120} />);
    expect(wrapper.text()).toEqual("★★★★★");
    wrapper = shallow(<CustomProgress p={100} />);
    expect(wrapper.text()).toEqual("★★★★★");
  });

  it('should render min if inferior or equal 0', function() {
    let wrapper = shallow(<CustomProgress p={-20} />);
    expect(wrapper.text()).toEqual("☆☆☆☆☆");
    wrapper = shallow(<CustomProgress p={0} />);
    expect(wrapper.text()).toEqual("☆☆☆☆☆");
  });

  it('should average on the lower integer', function() {
    let wrapper = shallow(<CustomProgress p={25} />);
    expect(wrapper.text()).toEqual("★☆☆☆☆");
  });

});
