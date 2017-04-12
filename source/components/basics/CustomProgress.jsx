import React from 'react';
import PropTypes from 'prop-types';

class CustomProgress extends React.PureComponent {
  render(){
    let blackN = Math.max(Math.min(100, this.props.p),0)/20;
    let whiteN = 5 - blackN;
    let res = "";
    for(let i = 0; i<blackN; i++){
      res += "&#9733";
    }
    for(let i = 0; i<whiteN; i++){
      res += "&#9734;";
    }
    return (
      <span>{res}</span>
    )
  }
}

CustomProgress.propTypes = {
  p: PropTypes.number.isRequired
}

export default CustomProgress;
