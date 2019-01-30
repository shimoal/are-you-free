import * as React from "react";
const { Component } = React;
import "../../styles/YearView.css";

import { MONTH_NAMES } from "../../helpers/constants";

import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import TimeUnit from "./TimeUnit";

import ICalendarProps from "../../interfaces/ICalendarViewProps";

interface IProps {
	options: Array<string>;
}

interface IState {
	displayYear: number;
}

export default class YearView extends Component<ICalendarProps & IProps> {
	state = {
		displayYear: this.props.date.getFullYear()
	};

	render() {
		const { selectOption, options } = this.props;
		const { displayYear } = this.state;

		return (
			<div className="calendar">
				<h2>
					<Button
						onClick={() =>
							this.setState((prevState: IState) => ({
								displayYear: prevState.displayYear - 1
							}))
						}
					>
						<Icon>arrow_left</Icon>
						Previous
					</Button>
					{this.state.displayYear}
					<Button
						onClick={() =>
							this.setState((prevState: IState) => ({
								displayYear: prevState.displayYear + 1
							}))
						}
					>
						Next
						<Icon>arrow_right</Icon>
					</Button>
				</h2>
				<div id="yearView">
					{MONTH_NAMES.map((name, i) => {
						return (
							<TimeUnit
								selectOption={selectOption}
								options={options}
								label={`${name} ${displayYear}`}
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
