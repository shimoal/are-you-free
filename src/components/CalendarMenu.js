import React, { Component } from 'react';
import styles from '../styles/CalendarMenu.css';

export default class CalendarMenu extends Component {
	render() {
		return <ul>
			<li><a>Year View</a></li>
			<li><a>Month View</a></li>
			<li><a>Week View</a></li>
			<li><a>Day View</a></li>
		</ul>
	}
}