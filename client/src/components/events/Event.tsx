import * as React from "react";
import ResponseForm from '../responses/ResponseForm';
import ResponseResults from '../responses/ResponseResults';

interface IProps {
	createdBy: string;
	title: string;
	linkID: string;
	eventId: number | null;
}

const Event = (props: IProps) => {
	const {createdBy, linkID, title, eventId} = props;
	return <div>
		<h1>{title}</h1>
		<h5>Event Created By: {createdBy}</h5>
		<p>This event can be accessed by sharing this link:<br />
		{"https://are-you-free.herokuapp.com/event/"+ linkID}</p>
		<ResponseResults />
		<ResponseForm eventId={eventId}/>
	</div>;
}




export default Event;