import React, { Component } from 'react';

import livrinho from './sound/livrinho.mp3';
import './button.css';

class Button extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      audio: new Audio(livrinho),
    };
  }
  handleClick() {
    // Referencia: https://www.geeksforgeeks.org/how-to-toggle-play-pause-in-reactjs-with-audio/
    this.state.audio.play();
  }
  render() {
    return (
      <button onClick={this.handleClick} className="button">
        <span>{this.props.text}</span>
      </button>
    );
  }
}

export default Button;
