import React from 'react';

import Keyword from './Keyword';

class Experience extends React.PureComponent {
  render(){
    let techKeywords = this.props.exp.tech_keywords.map((o, index) => <Keyword key={index} k={o} type='tech' />);
    let genKeywords = this.props.exp.gen_keywords.map((o, index) => <Keyword key={index} k={o} type='gen' />);
    return (
      <div>
        <h2>{this.props.exp.title} <small>at {this.props.exp.place}</small></h2>
        <pre className="desc">{this.props.exp.description}</pre>
        {techKeywords}<br/>
        {genKeywords}
      </div>
    );
  }
}

Experience.propTypes = {
  exp: React.PropTypes.object.isRequired
}

export default Experience;
