import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Experience from './Experience';

class Experiences extends React.PureComponent {
  render(){
    let experiences = this.props.experiences.map((x) =>
      <Experience exp={x} />
    );
    return (
      <Row id="exp">
        <Col sm={10} md={10} smOffset={1} mdOffset={1}>
            {experiences}
        </Col>
      </Row>
    );
  }
}

Experiences.propTypes = {
  experiences: React.PropTypes.array.isRequired
}

export default Experiences;
