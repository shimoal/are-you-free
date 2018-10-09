import React, { Component } from 'react';
import '../styles/DayBlock.css';

import DayBlock from './DayBlock';

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default class WeekView extends Component {
	render() {
		return <React.Fragment>
      <h2>Weekly Calendar</h2>
      <div className="weekView">
	      {DAY_NAMES.map((name, i) => {
	      	return <DayBlock name={name} key={i} />
      })}
      </div>
    </React.Fragment>
	}
}