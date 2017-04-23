import React from 'react';
import { shallow } from 'enzyme';

import ChronoMaker from '../ChronoMaker';

describe('ChronoMaker', function() {
  let content = [
    <p datadate="test1">text1</p>,
    <p datadate="test2">text2</p>
  ]
  let wrapper = shallow(<ChronoMaker>{content}</ChronoMaker>);

  it('should be a div of class chrono', function() {
    expect(wrapper.type()).toEqual('div');
    expect(wrapper.hasClass("chrono")).toEqual(true);
  });

  it('should have an ul with 2 children', function() {
    expect(wrapper.find('ul').length).toEqual(1);
    expect(wrapper.find('ul').children().length).toEqual(2);
  });

  it('should have child li > div > Row', function() {
    expect(wrapper.find('ul').childAt(0).type()).toEqual("li");
    expect(wrapper.find('ul').childAt(0).childAt(0).type()).toEqual("div");
    expect(wrapper.find('ul').childAt(0).childAt(0).hasClass("bulle")).toEqual(true);
    expect(wrapper.find('ul').childAt(0).childAt(0).childAt(0).name()).toEqual("Row");
    expect(wrapper.find('ul').childAt(0).childAt(0).childAt(0).hasClass("marginZero")).toEqual(true);
  });

  it('should take the right datadate prop into data-date', function() {
    expect(wrapper.find('ul').childAt(0).prop('data-date')).toEqual("test1");
    expect(wrapper.find('ul').childAt(1).prop('data-date')).toEqual("test2");
  });

  it('should contains initial children', function() {
    expect(wrapper.find('p').length).toEqual(2);
    expect(wrapper.find('p').get(0)).toEqual(content[0]);
    expect(wrapper.find('p').get(1)).toEqual(content[1]);
  });

});
