import * as React from "react";
const { Component } = React;
import "../../styles/YearView.css";

import { MONTH_NAMES } from "../../helpers/constants";
import TimeUnit from "./TimeUnit";

import IProps from '../../interfaces/ICalendarViewProps';

export default class YearView extends Component<IProps> {
	render() {
		const { selectOption, date } = this.props;

		return (
			<div className="calendar">
				<h2>{date.getFullYear()}</h2>
				<div id="yearView">
					{MONTH_NAMES.map((name, i) => {
						return <TimeUnit selectOption={selectOption} label={name} key={i} height={100} width={100} />;
					})}
				</div>
			</div>
		);
	}
}
