import React, { Component } from 'react';

import DayBlock from './DayBlock';

export default class WeekView extends Component {
	render() {
		return <React.Fragment>
      <h2>Weekly Calendar</h2>
      {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((week, i) => {
      	console.log('week', week);
      	return <DayBlock name={week} key={i} />
      })}
    </React.Fragment>
	}
}