import React from 'react';
import { Badge } from 'react-bootstrap';

class Keyword extends React.PureComponent {
  render(){
    let styleSized = {
      fontSize: 12 + Math.max((this.props.k.size-1)*4,0),
      backgroundColor: (this.props.type === 'tech') ? 'dimgrey' : 'grey'
    }
    return (
      <Badge style={styleSized} className="marginKeyword">
        {this.props.k.word}
      </Badge>
    );
  }
}

Keyword.propTypes = {
  type: React.PropTypes.oneOf(['tech', 'gen']).isRequired,
  k: React.PropTypes.object.isRequired
}

export default Keyword;
