import React, { Component } from 'react';
import '../styles/CalendarMenu.css';

export default class CalendarMenu extends Component {
	render() {
		const  { setView } = this.props;
		return <nav>
				<div onClick={() => setView('year')}>Year View</div>
				<div onClick={() => setView('month')}>Month View</div>
				<div onClick={() => setView('week')}>Week View</div>
				<div onClick={() => setView('day')}>Day View</div>
		</nav>
	}
}