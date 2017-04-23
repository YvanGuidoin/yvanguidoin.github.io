import React from 'react';
import { shallow } from 'enzyme';
import Parallax from '../Parallax';

import Row from 'react-bootstrap/lib/Row';

describe('Parallax', function() {
  const wrapper = shallow(<Parallax />);

  it('should render correctly', function() {
    expect(wrapper.getNode()).toEqual(
      <Row className="bg-parallax" />
    );
  });

});
