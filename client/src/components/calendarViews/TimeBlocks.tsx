import * as React from "react";

import Grid from "@material-ui/core/Grid";
import TimeUnit from "./TimeUnit";

interface IProps {
	abbreviation: string;
	label: string;
	removeOption: (optionIndex: number, event: any) => void;
	selectOption: (event: any, value: string) => void;
	options: Array<string>;
}

export default function(props: IProps) {
	const { abbreviation, label, removeOption, selectOption, options } = props;
	const timeblocks = [];

	for (let i = 0; i < 12; i++) {
		const hour = i ? i : 12;
		const hourLabel = hour + ":00" + abbreviation;

		timeblocks.push(
			<Grid item>
				<TimeUnit
					displayLabel={`${hourLabel}`}
					options={options}
					removeOption={removeOption}
					selectOption={selectOption}
					label={`${label} ${hourLabel}`}
					key={hour}
					height={100}
					width={100}
				/>
			</Grid>
		);
	}

	return <div>{timeblocks}</div>;
}
