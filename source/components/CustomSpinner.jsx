import React from 'react';

const ANIMATION_SPINNER = ["|","/","-","\\"];

class CustomSpinner extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      position: 0,
      character: ""
    }
  }

  tick(){
    var newChar = ANIMATION_SPINNER[this.state.position];
    var newPos = this.state.position + 1;
    newPos %= ANIMATION_SPINNER.length;
    this.setState({
      position: newPos,
      character: newChar
    })
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
        {this.state.character}
      </div>
    )
  }
}

export default CustomSpinner;
