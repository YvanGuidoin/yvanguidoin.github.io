import React from 'react';
import PropTypes from 'prop-types';
import { Image, Jumbotron, Media, PageHeader } from 'react-bootstrap';

import yvan from '../assets/yvan.jpg';

class Me extends React.PureComponent {

  toAgeFromBirthdayTime(t) {
    let dif = Date.now() - t;
    let age = new Date(dif);
    return Math.abs(age.getUTCFullYear() - 1970);
  }

  render(){
    return (
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
    );
  }
}

Me.propTypes = {
  resume: PropTypes.object.isRequired
}

export default Me;
