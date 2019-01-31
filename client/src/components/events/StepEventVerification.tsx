import * as React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

interface IProps {
	eventDescription: {
		title: string;
		createdBy: string;
		description: string;
	};
	options: Array<string>;
	eventType: string;
}

export default (props: IProps) => {
	const {
		eventDescription: { title, createdBy, description },
		options
	} = props;
	return (
		<div>
			<h4>
				View your event below to make sure the information is correct. Go back
				to previous screens to make any corrections.
			</h4>
			<Card>
				<CardContent>
					<Typography>Title: {title}</Typography>
					<Typography>Creator: {createdBy}</Typography>
					<Typography>Description: {description}</Typography>
					<Typography>Options:</Typography>
					{options.map(option => {
						return (
							<Typography key={"verification-option-${option}"}>
								{option}
							</Typography>
						);
					})}
				</CardContent>
			</Card>
		</div>
	);
};
