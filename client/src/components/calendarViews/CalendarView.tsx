import * as React from "react";

interface IProps {
	children: any;
}

const CalendarView = (props: IProps) => {
	return <div style={{ padding: 40, width: "100%" }}>{props.children}</div>;
};

export default CalendarView;
