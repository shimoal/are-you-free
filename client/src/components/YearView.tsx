import * as React from "react";
const { Component } = React;
import "../styles/YearView.css";

import { MONTH_NAMES } from "../helpers/constants";
import TimeUnit from "./TimeUnit";

export default class YearView extends Component<{ date: any }> {
	render() {
		const { date } = this.props;

		return (
			<div className="calendar">
				<h2>{date.getFullYear()}</h2>
				<div id="yearView">
					{MONTH_NAMES.map((name, i) => {
						return <TimeUnit label={name} key={i} height={100} width={100} />;
					})}
				</div>
			</div>
		);
	}
}
