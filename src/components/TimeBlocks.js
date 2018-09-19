import React from 'react';
import TimeBlock from './TimeBlock';

export default function() {
  const timeblocks = [];
  for (let i = 0; i < 12; i++) {
    timeblocks.push(<TimeBlock />);
  }

  return (
    <div>
      {timeblocks}
    </div>
  );
}