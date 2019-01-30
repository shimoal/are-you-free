import * as React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

interface IProps {
	eventType: string;
	handleTextFieldChange: (field: string, value: string) => void;
}

export default (props: IProps) => {
	const { eventType, handleTextFieldChange } = props;
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
					onChange={(event, value) => handleTextFieldChange("eventType", value)}
				>
					<FormControlLabel value="year" control={<Radio />} label="Year">
						View by Year
					</FormControlLabel>
					<FormControlLabel value="month" control={<Radio />} label="Month">
						View by Month
					</FormControlLabel>
					<FormControlLabel value="week" control={<Radio />} label="Week">
						View by Week
					</FormControlLabel>
					<FormControlLabel value="day" control={<Radio />} label="Day">
						View by Day
					</FormControlLabel>
				</RadioGroup>
			</FormControl>
		</div>
	);
};
