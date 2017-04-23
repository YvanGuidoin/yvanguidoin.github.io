import React from 'react';
import { shallow } from 'enzyme';

import ContactLink from '../ContactLink';

describe('ContactLink', function() {
  let contentTest = <span>testing</span>;
  let glyphiconTest = "home";
  let wrapper = shallow(<ContactLink>{contentTest}</ContactLink>);

  it('should be a col with class textAlignCenter', function() {
    expect(wrapper.name()).toEqual('Col');
    expect(wrapper.hasClass("textAlignCenter")).toEqual(true);
  });

  it('should contain a h3 with only 1 child', function() {
    expect(wrapper.childAt(0).type()).toEqual("h3");
    expect(wrapper.find('h3').children().length).toEqual(1);
  });

  it('should contain original children', function() {
    expect(wrapper.find('span').length).toEqual(1);
    expect(wrapper.find('span').getNode()).toEqual(contentTest);
  });

  let wrapper2 = shallow(<ContactLink glyph={glyphiconTest}>{contentTest}</ContactLink>);

  it('should display a Glyphicon home', function() {
    expect(wrapper2.find('Glyphicon').prop('glyph')).toEqual(glyphiconTest);
  });

  it('first child of h3 should have contactAlign class and 2 children', function() {
    expect(wrapper2.find('h3').children().first().hasClass("contactAlign")).toEqual(true);
    expect(wrapper2.find('h3').children().length).toEqual(2);
  });
});
