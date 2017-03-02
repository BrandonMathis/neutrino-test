import React, { Component } from 'react';
require('./assets/stylesheets/index.css');

class Card extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card-title'>
          <h2>Title</h2>
        </div>

        <div className='card-body'>
          <p>This is the body</p>
        </div>
      </div>
    )
  }
}

export default Card;
