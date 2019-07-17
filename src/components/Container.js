import React, { Component } from 'react';

import SimpleComponent from './SimpleComponent';
import SimplerComponent from './SimplerComponent';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "NOO"
    }
  }


  test = () => {
    console.log("I'm working!")
    this.state.output === "NOO" ? this.setState({output: "what is state?" }) : this.setState({output: "NOO"}) 
  }
  render() {
    return (
      <div>
        <SimpleComponent />
        <SimplerComponent handleClick={this.test} output={this.state.output} />
      </div>
    );
  }
}

export default Container;