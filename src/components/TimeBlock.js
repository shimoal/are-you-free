import React from 'react';

export default function(props) {
  console.log('props', props);
  return <p>Timeblock {props.number}:00 {props.abbreviation}</p>
};