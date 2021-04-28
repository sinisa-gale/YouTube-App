import React, {Component} from 'react';
import './Header.css';
import {Logo} from '../Logo/Logo';
import {Search} from '../Search/Search';

class Header extends Component {
  render () {
    return (
      <header>
        <div className="wrapper">
          <Logo />
          <Search />
        </div>
      </header>
    )
  }
}

export {Header};
