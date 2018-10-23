import * as React from "react";
import TimeUnit from "./TimeUnit";

export default function(props: { abbreviation: string }) {
	const timeblocks = [];

	for (let i = 0; i < 12; i++) {
		const hour = i ? i : 12;
		const label = hour + ":00" + props.abbreviation;

		timeblocks.push(
			<TimeUnit label={label} key={hour} height={100} width={180} />
		);
	}

	return <div className="timeblocks">{timeblocks}</div>;
}
