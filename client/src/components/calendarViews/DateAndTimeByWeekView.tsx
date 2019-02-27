import * as React from "react";
const { Component } = React;

import { DAY_NAMES, MONTH_NAMES } from "../../helpers/constants";
import { getAllWeekDates, getWeekDates } from "../../helpers/utils";

import CalendarView from "./CalendarView";
import Grid from "@material-ui/core/Grid";
import TimeBlocks from "./TimeBlocks";
import ViewHeader from "./ViewHeader";

import ICalendarProps from "../../interfaces/ICalendarViewProps";

interface IProps {
	options: Array<string>;
}

interface IState {
	sundayDate: Date;
}

export default class DateAndTimeByWeekView extends Component<
	ICalendarProps & IProps
> {
	state = {
		sundayDate: getAllWeekDates(this.props.date)[0]
	};

	handlePrevious = () => {
		this.setState((prevState: IState) => {
			const { sundayDate } = prevState;
			const prevSundayDate = new Date(
				sundayDate.getFullYear(),
				sundayDate.getMonth(),
				sundayDate.getDate() - 7
			);
			return {
				sundayDate: prevSundayDate
			};
		});
	};

	handleNext = () => {
		this.setState((prevState: IState) => {
			const { sundayDate } = prevState;
			const nextSundayDate = new Date(
				sundayDate.getFullYear(),
				sundayDate.getMonth(),
				sundayDate.getDate() + 7
			);
			return {
				sundayDate: nextSundayDate
			};
		});
	};

	render() {
		const { selectOption, options } = this.props;
		const weekDates = getAllWeekDates(this.state.sundayDate);

		return (
			<div>
				<ViewHeader
					displayValue={getWeekDates(this.state.sundayDate)}
					handlePrevious={this.handlePrevious}
					handleNext={this.handleNext}
				/>

				<CalendarView>
					<Grid container wrap="nowrap">
						{DAY_NAMES.map((name, i) => {
							const dateInfo = weekDates[i];

							const label = `${name} ${
								MONTH_NAMES[dateInfo.getMonth()]
							} ${dateInfo.getDate()}`;
							return (
								<div key={`weekday-${i}`}>
									<h5>{label}</h5>
									<TimeBlocks
										abbreviation="AM"
										label={label}
										selectOption={selectOption}
										options={options}
									/>

									<TimeBlocks
										abbreviation="PM"
										label={label}
										selectOption={selectOption}
										options={options}
									/>
								</div>
							);
						})}
					</Grid>
				</CalendarView>
			</div>
		);
	}
}
