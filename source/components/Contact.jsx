import React from 'react';
import { Image } from 'react-bootstrap';

import github from '../assets/github/GitHub-Mark-32px.png';

import ContactLink from './ContactLink';

class Contact extends React.PureComponent {
  render(){
    return (
      <div>
        <ContactLink glyph="earphone">
          <a href={"tel:"+this.props.resume.number}></a>{this.props.resume.number}
        </ContactLink>
        <ContactLink glyph="envelope">
          {this.props.resume.email}
        </ContactLink>
        <ContactLink>
          <Image src={github} width={32} alt="GitHub Miniature" />
          {this.props.resume.github}
        </ContactLink>
      </div>
    );
  }
}

Contact.propTypes = {
  resume: React.PropTypes.object.isRequired
}

export default Contact;
