import React, { Component } from 'react';

import TimeBlocks from './TimeBlocks';

export default class DayView extends Component {
  render() {
    return <div id="day-calendar">
      <h2>Here is DayView</h2>
      <TimeBlocks abbreviation="AM"/>
      <TimeBlocks abbreviation="PM"/>
    </div>
  }
}