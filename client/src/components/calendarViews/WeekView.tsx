import * as React from "react";
const { Component } = React;
import "../styles/WeekView.css";

import { DAY_NAMES } from "../helpers/constants";
import { getWeekDates } from "../helpers/utils";
import TimeUnit from "./TimeUnit";

export default class WeekView extends Component<{ date: any }> {
	render() {
		return (
			<div className="calendar">
				<h2>{getWeekDates(this.props.date)}</h2>
				<div id="weekView">
					{DAY_NAMES.map((name, i) => {
						return <TimeUnit label={name} key={i} height={300} width={60} />;
					})}
				</div>
			</div>
		);
	}
}
