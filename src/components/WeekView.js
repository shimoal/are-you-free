import React, { Component } from 'react';

import TimeUnit from './TimeUnit';

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default class WeekView extends Component {
	render() {
		return <React.Fragment>
      <h2>Weekly Calendar</h2>
      <div className="weekView">
	      {DAY_NAMES.map((name, i) => {
	      	return <TimeUnit label={name} key={i} height={400} width={120} />
      })}
      </div>
    </React.Fragment>
	}
}