import React from 'react';
import PropTypes from 'prop-types';

import github from '../assets/github/GitHub-Mark-32px.png';
import linkedin from '../assets/btn_profile_bluetxt_80x15_linkedin.png';

import ContactLink from './basics/ContactLink';

class Contact extends React.PureComponent {

  formatNumber(str){
    let FORMAT = /^(\+33|0)(\d)(\d{2})(\d{2})(\d{2})(\d{2})$/i;
    let res = str.match(FORMAT);
    res.splice(0,1);
    return res.join(" ");
  }

  render(){
    let resume = this.props.resume; //lisibility
    return (
      <div>
        <ContactLink glyph="earphone">
          <a href={"tel:"+resume.number}>&nbsp;{this.formatNumber(resume.number)}</a>
        </ContactLink>
        <ContactLink glyph="envelope">
          <a href={"mailto:"+resume.email}>&nbsp;{resume.email}</a>
        </ContactLink>
        <ContactLink img={github} alt="GitHub Miniature">
          <a href={resume.github} target="_blank">&nbsp;GitHub</a>
        </ContactLink>
        <ContactLink>
          <a href={resume.linkedin} target="_blank">
            <img src={linkedin} alt="Yvan Guidoin's profile on LinkedIn" />
          </a>
        </ContactLink>
      </div>
    );
  }
}

Contact.propTypes = {
  resume: PropTypes.object.isRequired
}

export default Contact;
