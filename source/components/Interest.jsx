import React from 'react';
import { Panel, Row } from 'react-bootstrap';

import Keyword from './Keyword';

class Interest extends React.PureComponent {
  render(){
    let genKeywords = this.props.int.gen_keywords.map((o, index) => <Keyword key={index} k={o} />);
    return (
      <Row>
          <h3>{this.props.int.title}</h3> during <h4>{this.props.int.duration}</h4>
          <p>{this.props.int.description}</p>
          <Panel>
            {genKeywords}
          </Panel>
      </Row>
    );
  }
}

Interest.propTypes = {
  int: React.PropTypes.object.isRequired
}

export default Interest;
