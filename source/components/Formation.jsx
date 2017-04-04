import React from 'react';

import Keyword from './Keyword';

class Formation extends React.PureComponent {
  render(){
    let techKeywords = this.props.form.tech_keywords.map((o, index) => <Keyword key={index} k={o} type='tech' />);
    let genKeywords = this.props.form.gen_keywords.map((o, index) => <Keyword key={index} k={o} type='gen' />);
    return (
      <div>
          <h2>{this.props.form.title}</h2>
          <pre className="desc">{this.props.form.description}</pre>
          {techKeywords}<br/>
          {genKeywords}
      </div>
    );
  }
}

Formation.propTypes = {
  form: React.PropTypes.object.isRequired
}

export default Formation;
