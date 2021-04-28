import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
  render () {
    return (
      <section className='search'>
        <input type='text' />
        <button>Search</button>
      </section>
    )
  }
}

export {Search};
