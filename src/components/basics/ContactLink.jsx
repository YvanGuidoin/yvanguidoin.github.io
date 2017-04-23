import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Image from 'react-bootstrap/lib/Image';

class ContactLink extends React.PureComponent {
  render(){
    let glyph = (this.props.glyph) ? <Glyphicon className="contactAlign" glyph={this.props.glyph} /> : (this.props.img) ? <Image src={this.props.img} width={30} alt={this.props.alt} className="contactAlign" /> : "";
    return (
        <Col sm={12} md={6} lg={4} className="textAlignCenter" >
          <h3>
            {glyph}
            {this.props.children}
          </h3>
        </Col>
    );
  }
}

ContactLink.propTypes = {
  glyph: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default ContactLink;
