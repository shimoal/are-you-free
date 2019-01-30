import * as React from "react";
const { Component } = React;
import "../../styles/YearView.css";

import { MONTH_NAMES } from "../../helpers/constants";
import TimeUnit from "./TimeUnit";

import ICalendarProps from "../../interfaces/ICalendarViewProps";

interface IProps {
	options: Array<string>;
}

export default class YearView extends Component<ICalendarProps & IProps> {
	render() {
		const { selectOption, date, options } = this.props;

		return (
			<div className="calendar">
				<h2>{date.getFullYear()}</h2>
				<div id="yearView">
					{MONTH_NAMES.map((name, i) => {
						return (
							<TimeUnit
								selectOption={selectOption}
								options={options}
								label={name}
								key={i}
								height={100}
								width={100}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}
