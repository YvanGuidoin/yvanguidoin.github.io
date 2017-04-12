import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/lib/Image';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Media from 'react-bootstrap/lib/Media';
import PageHeader from 'react-bootstrap/lib/PageHeader';

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
    let languages = resume.skills.languages.map((o) => <Skill s={o} />);
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
            <p>{languages}</p>
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
