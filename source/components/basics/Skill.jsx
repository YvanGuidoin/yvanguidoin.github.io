import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

import CustomProgress from './CustomProgress';

class Skill extends React.PureComponent {
  render(){
    let s = this.props.s;
    let tooltip = <Tooltip id={s.subject+this.props.k}>{s.comment}</Tooltip>;
    let content = <span>{s.subject} <CustomProgress p={s.percent} /></span>;
    if(s.comment) {
      return (
        <div>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            {content}
          </OverlayTrigger>
        </div>
      );
    }
    else return (
      <div>{content}</div>
    );
  }
}

Skill.propTypes = {
  s: PropTypes.object.isRequired,
  k: PropTypes.string.isRequired
}

export default Skill;
