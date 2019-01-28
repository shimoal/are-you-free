import * as React from "react";
const { Component } = React;
import axios from "axios";
import { RouteComponentProps } from "react-router-dom";

import Event from './Event';
import EventError from './EventError';

import IEvent from '../../interfaces/IEvent';

interface IMatchParams {
  linkID: string
}

class GetEvent extends Component<{} & RouteComponentProps<IMatchParams>> {
	state = {
		event: {
			id: null,
			createdBy: "",
			title: "",
			options: []
		},
		error: ""

	};

	componentDidMount() {
		const {linkID} = this.props.match.params;

		axios.get('/event/' + linkID)
		.then((response: {data: IEvent}) => {
			const {data: event} = response;
			if (!event) {
				this.setState({error: "This event does not exist"});
			} else {
				this.setState({event});
			}
		})
		.catch((error) => {
			this.setState({error});
		});
	}

	render() {
		const {error, event: {createdBy, title, id}} = this.state;
		const {linkID} = this.props.match.params;
		if (!error && id) {
			return <Event createdBy={createdBy} title={title} linkID={linkID} eventId={id} />;
		} 
		return <EventError errorMessage={"There was an error retrieving this event: " + error}/>

	}
}

export default GetEvent;