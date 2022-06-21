import React, { Component } from 'react';

import logo from './renan.png';
import './renan.css';
import Button from './Button';

class Renan extends Component {
  render() {
    return (
      <section className="container">
        <img src={logo} alt="Renan" className="renan-img" />
        <Button text="Diga lá, Renan!?" />
      </section>
    );
  }
}

export default Renan;
