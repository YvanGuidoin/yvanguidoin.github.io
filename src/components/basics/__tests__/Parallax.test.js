import React from 'react';
import { shallow } from 'enzyme';
import Parallax from '../Parallax';

describe('Parallax', function() {
  const wrapper = shallow(<Parallax />);

  it('should render as a row', function() {
    expect(wrapper.name()).toEqual("Row");
  });
  it('should have class bg-parallax', function() {
    expect(wrapper.hasClass("bg-parallax")).toEqual(true);
  });

});
