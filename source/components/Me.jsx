import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/lib/Image';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Media from 'react-bootstrap/lib/Media';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Carousel from 'react-bootstrap/lib/Carousel';

import yvan from '../assets/myself/yvan.jpg';
import yvan2 from '../assets/myself/yvan2.jpg';

import Skill from './basics/Skill';

class Me extends React.PureComponent {

  toAgeFromBirthdayTime(t) {
    let dif = Date.now() - t;
    let age = new Date(dif);
    return Math.abs(age.getUTCFullYear() - 1970);
  }

  render(){
    let resume = this.props.resume; // lisibility
    let techs = resume.skills.techs.map((o, index) => <Skill s={o} k={index} key={index} />);
    let codes = resume.skills.codes.map((o, index) => <Skill s={o} k={index} key={index} />);
    let languages = resume.skills.languages.map((o, index) => <Skill s={o} k={index} key={index} />);
    let yvanImages = [yvan, yvan2];
    let carouselItems = yvanImages.map((o, index) =>
      <Carousel.Item key={index}>
        <Image width={200} src={o} alt="Yvan Guidoin" rounded />
      </Carousel.Item>
    );
    return (
      <Jumbotron>
        <Media>
          <Media.Left>
            <Carousel controls={false} className="width200px">
              {carouselItems}
            </Carousel>
          </Media.Left>
          <Media.Body>
            <Media.Heading>
              <PageHeader>
                {resume.name} {resume.surname}
                <small>
                  {resume.title}
                </small>
              </PageHeader>
            </Media.Heading>
            <p>
              {this.toAgeFromBirthdayTime(resume.birthday)}, {resume.nationality}
            </p>
            <Row>
              <Col className="paddingBottom25Px" sm={6} md={4} lg={3}>
                {techs}
              </Col>
              <Col className="paddingBottom25Px" sm={6} md={4} lg={3}>
                {codes}
              </Col>
              <Col className="paddingBottom25Px" sm={6} md={4} lg={3}>
                {languages}
              </Col>
            </Row>
          </Media.Body>
        </Media>
      </Jumbotron>
    );
  }
}

Me.propTypes = {
  resume: PropTypes.object.isRequired
}

export default Me;
