import React from 'react';
import { Col, Row } from 'react-bootstrap';

class Interests extends React.PureComponent {
  render(){
    return (
      <Row id="int">
        <Col sm={10} md={10} smOffset={1} mdOffset={1}>
            <p>{JSON.stringify(this.props.interests)}</p>
        </Col>
      </Row>
    );
  }
}

Interests.propTypes = {
  interests: React.PropTypes.array.isRequired
}

export default Interests;
