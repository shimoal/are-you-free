import React, { Component } from "react";
import "../styles/YearView.css";

import TimeUnit from "./TimeUnit";
import { MONTH_NAMES } from "../helpers/constants";

export default class YearView extends Component {
	render() {
		return (
			<div className="calendar">
				<h2>Yearly Calendar</h2>
				<div id="yearView">
					{MONTH_NAMES.map((name, i) => {
						return <TimeUnit label={name} key={i} height={100} width={100} />;
					})}
				</div>
			</div>
		);
	}
}
