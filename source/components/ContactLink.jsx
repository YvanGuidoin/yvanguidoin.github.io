import React from 'react';
import { Col, Glyphicon, Image } from 'react-bootstrap';

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
  glyph: React.PropTypes.string,
  img: React.PropTypes.string,
  alt: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element)
  ])
}

export default ContactLink;
