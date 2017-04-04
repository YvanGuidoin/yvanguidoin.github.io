import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

class Contact extends React.PureComponent {
  render(){
    return (
      <div>
        <Button><Glyphicon glyph="glyphicon-earphone" />{this.props.resume.number}</Button>
      </div>
    );
  }
}

Contact.propTypes = {
  resume: React.PropTypes.object.isRequired
}

export default Contact;
