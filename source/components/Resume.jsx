import React from 'react';
import { Col, Jumbotron, Row } from 'react-bootstrap';

class Resume extends React.PureComponent {
  render(){
    return (
      <Col sm={10} md={10} smOffset={1} mdOffset={1}>
        <Jumbotron>
          <h1>{this.props.resume.title}</h1>
          <Row>
            <Col sm={5} md={5}>
              <h3>{this.props.resume.nationality}</h3>
            </Col>
            <Col sm={5} md={5}>
              <h4>{new Date(this.props.resume.birthday/1000).toLocaleDateString()}</h4>
            </Col>
          </Row>
        </Jumbotron>
        <p>{JSON.stringify(this.props.resume)}</p>
      </Col>
    );
  }
}

Resume.propTypes = {
  resume: React.PropTypes.object.isRequired
}

export default Resume;
