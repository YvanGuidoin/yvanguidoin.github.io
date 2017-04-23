import React from 'react';
import PropTypes from 'prop-types';

class CustomProgress extends React.PureComponent {
  render(){
    let blackN = parseInt(Math.max(Math.min(100, this.props.p),0)/20);
    let res = [];
    for(let i = 0; i<blackN; i++){
      res[i] = 1;
    }
    for(let i = blackN; i<5; i++){
      res[i] = 0;
    }
    return (
      <span className="floatRight">
        {res.map((c) => (c == 1) ? <span>&#9733;</span> : <span>&#9734;</span>)}
      </span>
    )
  }
}

CustomProgress.propTypes = {
  p: PropTypes.number.isRequired
}

export default CustomProgress;
