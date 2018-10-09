import React, { Component } from 'react';

import DayBlock from './DayBlock';

export default class WeekView extends Component {
	render() {
		return <React.Fragment>
      <h2>Weekly Calendar</h2>
      <DayBlock />
    </React.Fragment>
	}
}