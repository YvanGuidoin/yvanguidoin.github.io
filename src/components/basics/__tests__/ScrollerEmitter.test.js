import React from 'react';
import { shallow } from 'enzyme';

import ScrollerEmitter from '../ScrollerEmitter';

describe('ScrollerEmitter', function() {
  let testIdZone = 489;
  let content = [
    <p>text1</p>,
    <p>text2</p>
  ]
  let wrapper = shallow(<ScrollerEmitter idZone={testIdZone}>{content}</ScrollerEmitter>);

  it('should be a section of class offsetTarget', function() {
    expect(wrapper.type()).toEqual('section');
    expect(wrapper.hasClass("offsetTarget")).toEqual(true);
  });

  it('should have a Col with 2 children', function() {
    expect(wrapper.find('Col').length).toEqual(1);
    expect(wrapper.find('Col').children().length).toEqual(2);
  });

  it('should be Waypoint > div > Row > Col inside', function() {
    expect(wrapper.childAt(0).name()).toEqual("Waypoint");
    expect(wrapper.childAt(0).childAt(0).type()).toEqual("div");
    expect(wrapper.childAt(0).childAt(0).childAt(0).name()).toEqual("Row");
    expect(wrapper.childAt(0).childAt(0).childAt(0).childAt(0).name()).toEqual("Col");
  });

  it('should have the right id', function() {
    expect(wrapper.prop('id')).toEqual(testIdZone);
  });

  it('should contains initial children', function() {
    expect(wrapper.find('p').length).toEqual(2);
    expect(wrapper.find('p').get(0)).toEqual(content[0]);
    expect(wrapper.find('p').get(1)).toEqual(content[1]);
  });

});
