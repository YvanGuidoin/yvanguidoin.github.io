import React from 'react';
import Waypoint from 'react-waypoint';
import { Col, Row } from 'react-bootstrap';

class ScrollerEmitter extends React.PureComponent {
  render() {
    return (
      // to modify detection https://github.com/brigade/react-waypoint#prop-types
      <section id={this.props.idZone} className="offsetTarget">
        <Waypoint topOffset={"50%"} bottomOffset={"-50%"} onEnter={()=> this.props.onEnter(this.props.scrollKey)}>
          <div>
            <Row>
              <Col sm={10} md={10} smOffset={1} mdOffset={1}>
                {this.props.children}
              </Col>
            </Row>
          </div>
        </Waypoint>
      </section>
    );
  }
}

ScrollerEmitter.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element)
  ]),
  idZone: React.PropTypes.string,
  onEnter: React.PropTypes.func.isRequired,
  scrollKey: React.PropTypes.number.isRequired
}

export default ScrollerEmitter;
