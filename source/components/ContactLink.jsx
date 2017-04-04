import React from 'react';
import { Col, Glyphicon } from 'react-bootstrap';

class ContactLink extends React.PureComponent {
  render(){
    return (
        <Col sm={12} md={4}>
          <h2>
            <Glyphicon glyph={this.props.glyph} />
            {this.props.children}
          </h2>
        </Col>
    );
  }
}

ContactLink.propTypes = {
  glyph: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element)
  ])
}

export default ContactLink;
