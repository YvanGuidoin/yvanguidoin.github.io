import React from 'react';
import { Image } from 'react-bootstrap';

import github from '../assets/github/GitHub-Mark-32px.png';

import ContactLink from './ContactLink';

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
          <a href={"tel:"+resume.number}>{this.formatNumber(resume.number)}</a>
        </ContactLink>
        <ContactLink glyph="envelope">
          {resume.email}
        </ContactLink>
        <ContactLink>
          <Image src={github} width={32} alt="GitHub Miniature" />
          {resume.github}
        </ContactLink>
      </div>
    );
  }
}

Contact.propTypes = {
  resume: React.PropTypes.object.isRequired
}

export default Contact;
