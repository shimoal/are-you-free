import React from 'react';
import style from '../styles/TimeBlocks.css';

import TimeBlock from './TimeBlock';

export default function(props) {
  const timeblocks = [];

  for (let i = 0; i < 12; i++) {
    timeblocks.push(<TimeBlock 
      abbreviation={props.abbreviation}
      number={i ? i : 12}
      />);
  }

  return (
    <div className="timeblocks">
      {timeblocks}
    </div>
  );
}