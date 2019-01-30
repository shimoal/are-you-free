import * as React from "react";
import TimeUnit from "./TimeUnit";

interface IProps {
	abbreviation: string;
	selectOption: (event: any, value: string) => void;
}

export default function(props: IProps) {
	const {abbreviation, selectOption} = props;
	const timeblocks = [];

	for (let i = 0; i < 12; i++) {
		const hour = i ? i : 12;
		const label = hour + ":00" + abbreviation;

		timeblocks.push(
			<TimeUnit selectOption={selectOption} label={label} key={hour} height={100} width={180} />
		);
	}

	return <div className="timeblocks">{timeblocks}</div>;
}
