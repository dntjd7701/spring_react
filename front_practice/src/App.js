import React from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  a = 10;
  render() {
    return (
      <button onClick={this.handleOnClick}>
        {this.a}
        {this.state.isToggleOn ? 'On' : 'Off'}
      </button>
    );
  }
}
