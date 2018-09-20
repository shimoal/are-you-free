import React from 'react';
import style from '../styles/TimeBlock.css';

export default function(props) {
  return <div className="timeblock">{props.number}:00 {props.abbreviation}</div>
};