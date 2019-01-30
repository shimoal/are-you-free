import * as React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

interface IProps {
	eventType: string;
	handleEventTypeChange: (value: string) => void;
}

export default (props: IProps) => {
	const { eventType, handleEventTypeChange } = props;
	console.log("event type:", eventType);
	return (
		<div>
			<FormControl component="fieldset">
				<FormLabel component="legend">
					Select a calendar to choose options from:
				</FormLabel>
				<RadioGroup
					aria-label="EventType"
					name="eventType"
					value={eventType}
					onChange={(event, value) => handleEventTypeChange(value)}
				>
					<FormControlLabel
						value="year"
						control={<Radio />}
						label="View by Year"
					/>
					<FormControlLabel
						value="month"
						control={<Radio />}
						label="View by Month"
					/>
					<FormControlLabel
						value="week"
						control={<Radio />}
						label="View by Week"
					/>
					<FormControlLabel
						value="day"
						control={<Radio />}
						label="View by Day"
					/>
					<FormControlLabel
						value="custom"
						control={<Radio />}
						label="Create Custom Options"
					/>
				</RadioGroup>
			</FormControl>
		</div>
	);
};
