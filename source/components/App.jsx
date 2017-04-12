import React from 'react';
import PropTypes from 'prop-types';

import CustomSpinner from './basics/CustomSpinner';
import MenuContainer from './MenuContainer';
import ResumeContainer from './ResumeContainer';

class App extends React.Component {
    componentDidMount() {
        if(this.props.resume === null) {
            // console.log("Data needed!");
            this.props.getData();
        }
    }

    render() {
        const isResumeNull = (this.props.resume === null);
        if(isResumeNull) return (<CustomSpinner isReceived={this.props.received} />);
        else return (
          <div>
            <MenuContainer name={this.props.resume.name} surname={this.props.resume.surname} />
            <ResumeContainer resume={this.props.resume} />
          </div>
        );
    }
}

App.propTypes = {
  resume: PropTypes.object,
  received: PropTypes.bool.isRequired,
  getData: PropTypes.func.isRequired
};

export default App;
