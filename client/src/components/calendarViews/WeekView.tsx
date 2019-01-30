import * as React from "react";
const { Component } = React;
import "../../styles/WeekView.css";

import { DAY_NAMES } from "../../helpers/constants";
import { getWeekDates } from "../../helpers/utils";
import TimeUnit from "./TimeUnit";

import ICalendarProps from "../../interfaces/ICalendarViewProps";

interface IProps {
	options: Array<string>;
}

export default class WeekView extends Component<ICalendarProps & IProps> {
	render() {
		const { selectOption, date, options } = this.props;

		return (
			<div className="calendar">
				<h2>{getWeekDates(date)}</h2>
				<div id="weekView">
					{DAY_NAMES.map((name, i) => {
						return (
							<TimeUnit
								selectOption={selectOption}
								options={options}
								label={name}
								key={i}
								height={300}
								width={60}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}
