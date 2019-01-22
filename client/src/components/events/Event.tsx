import * as React from "react";
const { Component } = React;
import axios from "axios";
import { RouteComponentProps } from "react-router-dom";

import EventError from './EventError';

interface IMatchParams {
  linkID: string
}

class Event extends Component<{} & RouteComponentProps<IMatchParams>> {
	state = {
		createdBy: "",
		error: "",
		title: ""
	};

	componentDidMount() {
		const {linkID} = this.props.match.params;
		axios.get('/event/' + linkID)
		.then(({data}) => {
			if (!data) {
				this.setState({error: "This event does not exist"});
			} else {
				const {title, createdBy} = data;
				this.setState({title, createdBy});			
			}
		})
		.catch((error) => {
			this.setState({error});
		});
	}

	render() {
		const {createdBy, error, title} = this.state;
		const {linkID} = this.props.match.params;
		if (!error) {
			return <div>
				<h1>{title}</h1>
				<h5>Event Created By: {createdBy}</h5>
				<p>This event can be accessed by sharing this link:<br />
				{"https://are-you-free.herokuapp.com/event/"+ linkID}</p>
			</div>;
		} 
		return <EventError errorMessage={"There was an error retrieving this event: " + error}/>

	}
}

export default Event;