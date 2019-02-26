import * as React from "react";
const { Component } = React;

import { MONTH_NAMES } from "../../helpers/constants";
import { getNumDaysInMonth } from "../../helpers/utils";

import CalendarView from "./CalendarView";
import Grid from "@material-ui/core/Grid";
import TimeUnit from "./TimeUnit";
import ViewHeader from "./ViewHeader";

import ICalendarProps from "../../interfaces/ICalendarViewProps";

interface IProps {
	options: Array<string>;
}

interface IState {
	displayMonthIndex: number;
	displayYear: number;
}

export default class MonthView extends Component<ICalendarProps & IProps> {
	state = {
		displayMonthIndex: this.props.date.getMonth(),
		displayYear: this.props.date.getFullYear()
	};

	handleNext = () => {
		this.setState((prevState: IState) => {
			const { displayMonthIndex, displayYear } = prevState;
			if (displayMonthIndex === 11) {
				return { displayMonthIndex: 0, displayYear: displayYear + 1 };
			}
			return { displayMonthIndex: displayMonthIndex + 1 };
		});
	};

	handlePrevious = () => {
		this.setState((prevState: IState) => {
			const { displayMonthIndex, displayYear } = prevState;
			if (displayMonthIndex === 0) {
				return { displayMonthIndex: 11, displayYear: displayYear - 1 };
			}

			return { displayMonthIndex: displayMonthIndex - 1 };
		});
	};

	render() {
		const { selectOption, date, options } = this.props;
		const { displayMonthIndex, displayYear } = this.state;
		const displayMonth = MONTH_NAMES[displayMonthIndex];

		const daysInMonth = getNumDaysInMonth(displayMonthIndex, date.getYear());

		const days = [];

		for (let i = 1; i <= daysInMonth; i++) {
			days.push(
				<Grid item>
					<TimeUnit
						options={options}
						selectOption={selectOption}
						label={`${displayMonth} ${i.toString()} ${displayYear}`}
						key={i}
						height={100}
						width={100}
					/>
				</Grid>
			);
		}

		return (
			<div>
				<ViewHeader
					displayValue={`${displayMonth} ${displayYear}`}
					handleNext={this.handleNext}
					handlePrevious={this.handlePrevious}
				/>
				<CalendarView>
					<Grid container>{days}</Grid>
				</CalendarView>
			</div>
		);
	}
}
