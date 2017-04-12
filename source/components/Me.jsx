import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/lib/Image';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Media from 'react-bootstrap/lib/Media';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

import yvan from '../assets/yvan.jpg';

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
    let styleSkills = {
      paddingBottom: 25
    }
    return (
      <Jumbotron>
        <Media>
         <Media.Left>
            <Image width={200} src={yvan} alt="Yvan Guidoin" rounded/>
          </Media.Left>
          <Media.Body>
            <Media.Heading><PageHeader>{resume.name} {resume.surname} <small>{resume.title}</small></PageHeader></Media.Heading>
            <p>
              {this.toAgeFromBirthdayTime(resume.birthday)}, {resume.nationality}
            </p>
            <Row>
              <Col style={styleSkills} sm={6} md={4} lg={3}>
                {techs}
              </Col>
              <Col style={styleSkills} sm={6} md={4} lg={3}>
                {codes}
              </Col>
              <Col style={styleSkills} sm={6} md={4} lg={3}>
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
