import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

import CustomProgress from './CustomProgress';

class Skill extends React.PureComponent {
  render(){
    let s = this.props.s;
    let tooltip = <Tooltip id={s.subject+this.props.k}>{s.comment}</Tooltip>;
    let content = <div>{s.subject} <CustomProgress p={s.percent} /></div>;
    if(s.comment) {
      return (
        <OverlayTrigger placement="bottom" overlay={tooltip}>
          {content}
        </OverlayTrigger>
      );
    }
    else return (
      <div>{content}</div>
    );
  }
}

Skill.propTypes = {
  s: PropTypes.object.isRequired,
  k: PropTypes.number.isRequired
}

export default Skill;
