import * as React from "react";
const { Component } = React;
import "../../styles/WeekView.css";

import { DAY_NAMES } from "../../helpers/constants";
import { getWeekDates } from "../../helpers/utils";
import TimeUnit from "./TimeUnit";

import IProps from '../../interfaces/ICalendarViewProps';

export default class WeekView extends Component<IProps> {
	render() {
		const {selectOption, date} = this.props;

		return (
			<div className="calendar">
				<h2>{getWeekDates(date)}</h2>
				<div id="weekView">
					{DAY_NAMES.map((name, i) => {
						return <TimeUnit selectOption={selectOption} label={name} key={i} height={300} width={60} />;
					})}
				</div>
			</div>
		);
	}
}
