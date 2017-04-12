import React from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import { Col, Row } from 'react-bootstrap';

class ScrollerEmitter extends React.PureComponent {
  render() {
    return (
      // to modify detection https://github.com/brigade/react-waypoint#prop-types
      <section id={this.props.idZone} className="offsetTarget">
        <Waypoint
          scrollableAncestor={window}
          onEnter={() => this.props.onE(this.props.scrollKey)}
          onLeave={() => this.props.onL(this.props.scrollKey)}
          >
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
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  idZone: PropTypes.string,
  onE: PropTypes.func.isRequired, //onEnter
  onL: PropTypes.func.isRequired, //onLeave
  scrollKey: PropTypes.number.isRequired
}

export default ScrollerEmitter;
