import React, { Component } from 'react';
class Button extends Component {
  constructor(props) {
    super(props);

    this.state = { num: 0 };
  }

  handleClcik = () => {
    this.setState({
      num: this.state.num + 1
    });
  };
  render() {
    return <button onClick={this.handleClcik}>{this.state.num}</button>;
  }
}

export default Button;
