import * as React from "react";
const { Component } = React;
import axios from "axios";
import { RouteComponentProps } from "react-router-dom";

import Event from './Event';
import EventError from './EventError';

interface IMatchParams {
  linkID: string
}

class GetEvent extends Component<{} & RouteComponentProps<IMatchParams>> {
	state = {
		createdBy: "",
		error: "",
		title: "",
		id: null
	};

	componentDidMount() {
		const {linkID} = this.props.match.params;
		axios.get('/event/' + linkID)
		.then(({data}) => {
			if (!data) {
				this.setState({error: "This event does not exist"});
			} else {
				console.log('DATA:', data);
				const {title, createdBy, id} = data;
				this.setState({title, createdBy, id});
			}
		})
		.catch((error) => {
			this.setState({error});
		});
	}

	render() {
		const {createdBy, error, title, id} = this.state;
		const {linkID} = this.props.match.params;
		if (!error) {
			return <Event createdBy={createdBy} title={title} linkID={linkID} eventId={id} />;
		} 
		return <EventError errorMessage={"There was an error retrieving this event: " + error}/>

	}
}

export default GetEvent;