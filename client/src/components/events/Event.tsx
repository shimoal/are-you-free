import * as React from "react";

import ResponseForm from '../responses/ResponseForm';
import ResponseResults from '../responses/ResponseResults';

import IEvent from '../../interfaces/IEvent';

interface IProps {
	event: IEvent;
}

const Event = (props: IProps) => {
	const {event, event: {createdBy, title, linkID}}= props;
	return <div>
		<h1>{title}</h1>
		<h5>Event Created By: {createdBy}</h5>
		<p>This event can be accessed by sharing this link:<br />
		{"https://are-you-free.herokuapp.com/event/"+ linkID}</p>
			<ResponseResults event={event}/>
			<ResponseForm event={event}/>
	</div>;
}




export default Event;