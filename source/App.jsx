import React from 'react';

import './App.scss';

import CustomSpinner from './components/CustomSpinner';
import Menu from './components/Menu';

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
          <Menu name={this.props.resume.name} surname={this.props.resume.surname} />
        );
    }
}

App.propTypes = {
  resume: React.PropTypes.object,
  received: React.PropTypes.bool.isRequired,
  getData: React.PropTypes.func.isRequired
};

export default App;
