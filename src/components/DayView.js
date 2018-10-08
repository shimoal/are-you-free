import React, { Component } from 'react';
import styles from '../styles/DayView.css';

import TimeBlocks from './TimeBlocks';

export default class DayView extends Component {
  state = {
    allFree: false,
    allBusy: false
  }

  render() {
    const {allFree, allBusy} = this.state;

    return  <React.Fragment>
      <h2>Daily Calendar</h2>
      <button onClick={() => {
        console.log('click');
        this.setState({allFree: true});
      }}>Set all to 'Free'</button>
      <button>Set all to 'Busy'</button>
      <div id="day-calendar">

        <TimeBlocks abbreviation="AM" allFree={allFree} allBusy={allBusy}/>
        <TimeBlocks abbreviation="PM" allFree={allFree} allBusy={allBusy}/>
      </div>
    </React.Fragment>
  }
}