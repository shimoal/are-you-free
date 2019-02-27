import * as React from "react";
const { Component } = React;

import { DAY_NAMES, MONTH_NAMES } from "../../helpers/constants";
import { getAllWeekDates, getWeekDates } from "../../helpers/utils";

import CalendarView from "./CalendarView";
import Grid from "@material-ui/core/Grid";
import TimeUnit from "./TimeUnit";
import Typography from "@material-ui/core/Typography";
import ViewHeader from "./ViewHeader";

import ICalendarProps from "../../interfaces/ICalendarViewProps";

interface IProps {
	options: Array<string>;
}

interface IState {
	sundayDate: Date;
}

export default class WeekView extends Component<ICalendarProps & IProps> {
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
		const { removeOption, selectOption, options } = this.props;
		const weekDates = getAllWeekDates(this.state.sundayDate);

		return (
			<div>
				<ViewHeader
					displayValue={getWeekDates(this.state.sundayDate)}
					handlePrevious={this.handlePrevious}
					handleNext={this.handleNext}
				/>

				<CalendarView>
					<Grid container justify="center">
						{DAY_NAMES.map((name, i) => {
							const dateInfo = weekDates[i];
							const month = MONTH_NAMES[dateInfo.getMonth()];
							const date = dateInfo.getDate();

							const label = `${name} ${month} ${date} ${dateInfo.getFullYear()}`;
							return (
								<Grid item>
									<Typography variant="h6">{`${name}`}</Typography>
									<TimeUnit
										displayLabel={`${month} ${date}`}
										height={300}
										key={i}
										label={label}
										options={options}
										removeOption={removeOption}
										selectOption={selectOption}
										width={100}
									/>
								</Grid>
							);
						})}
					</Grid>
				</CalendarView>
			</div>
		);
	}
}
