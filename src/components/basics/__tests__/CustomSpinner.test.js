import React from 'react';
import { shallow } from 'enzyme';

import CustomSpinner from '../CustomSpinner';

describe('CustomSpinner', function() {
  let wrapper = shallow(<CustomSpinner isReceived={false} />);

  it('should render as a div with overlay', function() {
    expect(wrapper.type()).toEqual('div');
    expect(wrapper.hasClass("overlay")).toEqual(true);
  });

  it('should contain a p that glitch', function() {
    expect(wrapper.children().length).toEqual(1);
    expect(wrapper.children().type()).toEqual("p");
    expect(wrapper.children().hasClass("glitch")).toEqual(true);
  })

  let wrapperState = wrapper;
  let testState = { text: 'text content'};
  wrapperState.setState(testState);

  it('should have the right content', function() {
    expect(wrapper.text()).toEqual(testState.text);
  });

  it('should have the same data-text as content', function() {
    expect(wrapper.children().prop("data-text")).toEqual(testState.text);
  });

});
