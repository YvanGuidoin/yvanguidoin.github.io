import React from 'react';
import { Panel, Row } from 'react-bootstrap';

import Keyword from './Keyword';

class Experience extends React.PureComponent {
  render(){
    let techKeywords = this.props.exp.tech_keywords.map((o) => <Keyword k={o} />);
    let genKeywords = this.props.exp.gen_keywords.map((o) => <Keyword k={o} />);
    return (
      <Row>
          <p><h3>{this.props.exp.title}</h3> at <h4>{this.props.exp.place}</h4></p>
          <p>{this.props.exp.begin} => {this.props.exp.end}</p>
          <p>{this.props.exp.description}</p>
          <Panel>
            {techKeywords}
          </Panel>
          <Panel>
            {genKeywords}
          </Panel>
      </Row>
    );
  }
}

Experience.propTypes = {
  exp: React.PropTypes.object.isRequired
}

export default Experience;
