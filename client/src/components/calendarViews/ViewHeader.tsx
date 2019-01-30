import * as React from "react";

import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

interface IProps {
	displayValue: string;
	handlePrevious: () => void;
	handleNext: () => void;
}

export default (props: IProps) => {
	const { displayValue, handlePrevious, handleNext } = props;

	return (
		<h2>
			<Button onClick={handlePrevious}>
				<Icon>arrow_left</Icon>
				Previous
			</Button>
			{displayValue}
			<Button onClick={handleNext}>
				Next
				<Icon>arrow_right</Icon>
			</Button>
		</h2>
	);
};
