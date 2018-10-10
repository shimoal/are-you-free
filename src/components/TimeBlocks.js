import React from "react";
import "../styles/TimeBlocks.css";

import TimeUnit from "./TimeUnit";

export default function(props) {
  const timeblocks = [];

  for (let i = 0; i < 12; i++) {
    const number = i ? i : 12;
    const label = number + ":00" + props.abbreviation;

    timeblocks.push(
      <TimeUnit label={label} key={number} height={100} width={180} />
    );
  }

  return <div className="timeblocks">{timeblocks}</div>;
}
