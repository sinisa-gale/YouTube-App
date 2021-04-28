import React, {Component} from 'react';
import './Logo.css';
import logo from '../../images/logo.png';

class Logo extends Component {
  render () {
    return (
      <>
        <img src={logo} />
      </>
    )
  }
}

export {Logo};
