import React from 'react';
import TimeBlock from './TimeBlock';

export default function(props) {
  const timeblocks = [];
  for (let i = 0; i < 12; i++) {
    console.log('i:', i);
    timeblocks.push(<TimeBlock 
      abbreviation={props.abbreviation}
      number={i ? i : 12}
      />);
  }

  return (
    <div>
      {timeblocks}
    </div>
  );
}