import * as React from "react";

interface IProps {
	children: any;
}

const CalendarView = (props: IProps) => {
	return <div style={{ width: "100%" }}>{props.children}</div>;
};

export default CalendarView;
