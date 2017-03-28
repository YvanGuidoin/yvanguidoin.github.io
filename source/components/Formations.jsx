import React from 'react';
import { Col, Row } from 'react-bootstrap';

class Formations extends React.PureComponent {
  render(){
    return (
      <Row id="form">
        <Col sm={10} md={10} smOffset={1} mdOffset={1}>
            <p>{JSON.stringify(this.props.formations)}</p>
        </Col>
      </Row>
    );
  }
}

Formations.propTypes = {
  formations: React.PropTypes.array.isRequired
}

export default Formations;
