import * as React from "react";

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
	return <div>{JSON.stringify(props)}</div>;
};
