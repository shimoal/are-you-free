import React from 'react';
import TimeBlock from './TimeBlock';

export default function() {
  const timeblocks = [<TimeBlock number={12}/>];
  for (let i = 1; i < 12; i++) {
    timeblocks.push(<TimeBlock number={i}/>);
  }

  return (
    <div>
      {timeblocks}
    </div>
  );
}