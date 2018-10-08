import React, { Component } from 'react';
import '../styles/DayView.css';

import TimeBlocks from './TimeBlocks';

export default class DayView extends Component {
  render() {
    return  <React.Fragment>
      <h2>Daily Calendar</h2>
      <div id="day-calendar">

        <TimeBlocks 
          abbreviation="AM" 
        />
        <TimeBlocks 
          abbreviation="PM" 
          />
      </div>
    </React.Fragment>
  }
}