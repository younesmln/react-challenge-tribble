import React, { Component } from 'react';
import Circles from './shapes/Circles';

const HEX_COLOR_REGEX = /^([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { circlesCount: 1, color: 'red' };
    this.addShape = this.addShape.bind(this);
    this.colorChanged = this.colorChanged.bind(this);
  }


  addShape() {
    this.setState(({ circlesCount }) => ({ circlesCount: circlesCount + 1 }));
  }

  colorChanged(e) {
    const input = e.target.value.trim();
    const match = HEX_COLOR_REGEX.test(input);
    console.log(input, match);
    if (match) {
      this.setState({ color: `#${input}` });
    }
  }

  render() {
    const { circlesCount, color } = this.state;
    return (
      <div>
        <h1>Hello, there is currently { circlesCount } shape </h1>
        <button onClick={this.addShape}>add Shape!</button>
        <input onChange={this.colorChanged} />
        <Circles circlesCount={circlesCount} color={color} />
      </div>
    );
  }
}
