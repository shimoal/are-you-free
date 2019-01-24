import * as React from "react";
import ResponseForm from '../responses/ResponseForm';

interface IProps {
	createdBy: string;
	title: string;
	linkID: string;
}

const Event = (props: IProps) => {
	const {createdBy, linkID, title} = props;
	return <div>
		<h1>{title}</h1>
		<h5>Event Created By: {createdBy}</h5>
		<p>This event can be accessed by sharing this link:<br />
		{"https://are-you-free.herokuapp.com/event/"+ linkID}</p>
		<ResponseForm />
	</div>;
}




export default Event;