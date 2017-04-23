import React from 'react';
import { shallow } from 'enzyme';
import Keyword from '../Keyword';

describe('Keyword', function() {
  let content = {
    "word": "Content to test",
    "size": 6
  };
  let wrapper = shallow(<Keyword k={content} type={"tech"} />);

  it('should be of type Badge', function() {
    expect(wrapper.name()).toEqual("Badge");
  });
  it('should have marginKeyword', function() {
    expect(wrapper.hasClass("marginKeyword")).toEqual(true);
  });
  it('should have the content text', function() {
    expect(wrapper.render().text()).toEqual(content.word);
  });
  // Impossible for now with enzyme
  // it('should have the right font size', function() {
  //   expect(wrapper.render()).toEqual(content.word);
  // });

});
