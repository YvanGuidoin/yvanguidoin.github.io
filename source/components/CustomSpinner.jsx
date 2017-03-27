import React from 'react';

const ANIMATION_SPINNER = ["|","/","-","\\"];

class CustomSpinner extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      position: 0,
      text: ""
    }
  }

  tick(){
    let newChar, newPos;
    if(this.props.isReceived){
      newPos = this.state.position + 1;
      newPos %= ANIMATION_SPINNER.length;
      newChar = "DATA RECEIVED";
      for(let i = 0; i < newPos; i++) newChar += ".";
      this.setState({
        position: newPos,
        text: newChar
      });
    }
    else {
      newChar = ANIMATION_SPINNER[this.state.position];
      newPos = this.state.position + 1;
      newPos %= ANIMATION_SPINNER.length;
      this.setState({
        position: newPos,
        text: newChar
      });
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 250);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render(){
    return (
      <div className="overlay">
        <p className="glitch" data-text={this.state.text} >{this.state.text}</p>
      </div>
    )
  }
}

CustomSpinner.propTypes = {
  isReceived: React.PropTypes.bool.isRequired
}

export default CustomSpinner;
