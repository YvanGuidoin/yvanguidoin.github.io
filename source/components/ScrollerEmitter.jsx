import React from 'react';
import Waypoint from 'react-waypoint';

class ScrollerEmitter extends React.PureComponent {
  render() {
    return (
      // to modify detection https://github.com/brigade/react-waypoint#prop-types
      <Waypoint topOffset={"50%"} onEnter={()=> this.props.onEnter(this.props.scrollKey)}>
        <div>
          {this.props.children}
        </div>
      </Waypoint>
    );
  }
}

ScrollerEmitter.propTypes = {
  children: React.PropTypes.element,
  onEnter: React.PropTypes.func.isRequired,
  scrollKey: React.PropTypes.number.isRequired
}

export default ScrollerEmitter;
