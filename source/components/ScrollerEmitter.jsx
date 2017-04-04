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
              <Col xs={12} sm={11} md={10} lg={10} xsOffset={0} smOffset={0} mdOffset={0} lgOffset={1}>
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
