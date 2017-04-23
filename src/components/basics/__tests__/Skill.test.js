import React from 'react';
import { shallow } from 'enzyme';
import Skill from '../Skill';

import { Tooltip, OverlayTrigger } from 'react-bootstrap';

import CustomProgress from '../CustomProgress';

describe('Skill', function() {
  const key = "1";
  it('should render basic without comment', function() {
    let details = {
      "subject": "subjectTest",
      "percent": 99
    }
    let wrapper = shallow(<Skill s={details} k={key} />);
    expect(wrapper.getNode()).toEqual(
      <div><div>{details.subject} <CustomProgress p={details.percent} /></div></div>
    );
  });

  it('should render basic with comment', function() {
    let details = {
      "subject": "subjectTest",
      "percent": 99,
      "comment": "testComment"
    }
    let wrapper = shallow(<Skill s={details} k={key} />);
    expect(wrapper.getNode()).toEqual(
      <OverlayTrigger placement="bottom" overlay={<Tooltip id={details.subject+key}>{details.comment}</Tooltip>}>
        <div>{details.subject} <CustomProgress p={details.percent} /></div>
      </OverlayTrigger>
    );
  });

});
