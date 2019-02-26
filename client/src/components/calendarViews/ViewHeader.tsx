import * as React from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";

interface IProps {
	displayValue: string;
	handlePrevious: () => void;
	handleNext: () => void;
}

export default (props: IProps) => {
	const { displayValue, handlePrevious, handleNext } = props;

	return (
		<div style={{ width: "100%" }}>
			<Grid container justify="space-between">
				<Grid item>
					<Button onClick={handlePrevious}>
						<Icon>arrow_left</Icon>
						Previous
					</Button>
				</Grid>
				<Grid item>
					<Typography variant="h2">{displayValue}</Typography>
				</Grid>
				<Grid item>
					<Button onClick={handleNext}>
						Next
						<Icon>arrow_right</Icon>
					</Button>
				</Grid>
			</Grid>
		</div>
	);
};
