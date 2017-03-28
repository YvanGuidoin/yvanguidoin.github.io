import React from 'react';
import { Label } from 'react-bootstrap';

class Keyword extends React.PureComponent {
  render(){
    return (
      <Label bsStyle="default" className="marginRight2Px">
        {this.props.k.word}
      </Label>
    );
  }
}

Keyword.propTypes = {
  k: React.PropTypes.object.isRequired
}

export default Keyword;
