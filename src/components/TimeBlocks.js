import React from 'react';
import style from '../styles/TimeBlocks.css';

import TimeBlock from './TimeBlock';

export default function(props) {
  const timeblocks = [];
  const {allFree, allBusy} = props;
  console.log('all Free in timeblocks', allFree);
  for (let i = 0; i < 12; i++) {
    timeblocks.push(<TimeBlock 
      abbreviation={props.abbreviation}
      number={i ? i : 12}
      allFree={allFree}
      allBusy={allBusy}
      isFree={allFree}
      />);
  }

  return (
    <div className="timeblocks">
      {timeblocks}
    </div>
  );
}