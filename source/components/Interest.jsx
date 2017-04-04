import React from 'react';
import { Col } from 'react-bootstrap';

import Keyword from './Keyword';

class Interest extends React.PureComponent {
  render(){
    let genKeywords = this.props.int.gen_keywords.map((o, index) => <Keyword key={index} k={o} />);
    return (
      <Col sm={6} md={4} className="separator">
        <div className="bulle">
            <h2>{this.props.int.title} during <small>{this.props.int.duration}</small></h2>
            <pre className="desc">{this.props.int.description}</pre>
            {genKeywords}
        </div>
      </Col>
    );
  }
}

Interest.propTypes = {
  int: React.PropTypes.object.isRequired
}

export default Interest;
