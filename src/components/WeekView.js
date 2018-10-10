import React, { Component } from "react";
import "../styles/WeekView.css";

import TimeUnit from "./TimeUnit";
import { DAY_NAMES } from "../helpers/constants";

export default class WeekView extends Component {
	render() {
		return (
			<div className="calendar">
				<h2>Weekly Calendar</h2>
				<div id="weekView">
					{DAY_NAMES.map((name, i) => {
						return <TimeUnit label={name} key={i} height={300} width={60} />;
					})}
				</div>
			</div>
		);
	}
}
