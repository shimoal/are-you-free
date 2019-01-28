import * as React from "react";

import ResponseForm from '../responses/ResponseForm';
import ResponseResults from '../responses/ResponseResults';

import IEvent from '../../interfaces/IEvent';

interface IProps {
	event: IEvent;
	linkID: string;
}

const Event = (props: IProps) => {
	const {linkID, event, event: {createdBy, title, id}}= props;
	return <div>
		<h1>{title}</h1>
		<h5>Event Created By: {createdBy}</h5>
		<p>This event can be accessed by sharing this link:<br />
		{"https://are-you-free.herokuapp.com/event/"+ linkID}</p>
			<ResponseResults eventId={id}/>
			<ResponseForm event={event} linkID={linkID}/>
	</div>;
}




export default Event;