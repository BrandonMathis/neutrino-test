import React from 'react';
import Card from './Card';

export default function(props) {
  return (
    <section>
      <p>Hello {props.name}</p>
      <Card/>
    </section>
  )
}
