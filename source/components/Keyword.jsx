import React from 'react';
import { Badge } from 'react-bootstrap';

class Keyword extends React.PureComponent {
  render(){
    return (
      <Badge bsStyle="default" className="marginKeyword">
        {this.props.k.word}
      </Badge>
    );
  }
}

Keyword.propTypes = {
  k: React.PropTypes.object.isRequired
}

export default Keyword;
