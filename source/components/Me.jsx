import React from 'react';
import { Col, Image, Jumbotron, Media, PageHeader, Row } from 'react-bootstrap';

import yvan from '../assets/yvan.jpg';

class Me extends React.PureComponent {

  toAgeFromBirthdayTime(t) {
    let dif = Date.now() - t;
    let age = new Date(dif);
    return Math.abs(age.getUTCFullYear() - 1970);
  }

  render(){
    return (
      <Row id="me">
        <Col sm={10} md={10} smOffset={1} mdOffset={1}>
          <Jumbotron>
            <Media>
             <Media.Left>
                <Image width={200} src={yvan} alt="Yvan Guidoin" rounded/>
              </Media.Left>
              <Media.Body>
                <Media.Heading><PageHeader>{this.props.resume.name} {this.props.resume.surname} <small>{this.props.resume.title}</small></PageHeader></Media.Heading>
                <p>
                  {this.toAgeFromBirthdayTime(this.props.resume.birthday)}, {this.props.resume.nationality}
                </p>
              </Media.Body>
            </Media>
          </Jumbotron>
        </Col>
      </Row>
    );
  }
}

Me.propTypes = {
  resume: React.PropTypes.object.isRequired
}

export default Me;
