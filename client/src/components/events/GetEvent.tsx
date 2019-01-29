import * as React from "react";
const { Component } = React;
import axios from "axios";
import { RouteComponentProps } from "react-router-dom";

import Event from './Event';
import EventError from './EventError';
import Loading from '../UI/Loading';

import IEvent from '../../interfaces/IEvent';

interface IMatchParams {
  linkID: string
}

class GetEvent extends Component<{} & RouteComponentProps<IMatchParams>> {
	state = {
		event: null,
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
		const {error, event} = this.state;
		if (error) {
			return <EventError errorMessage={"There was an error retrieving this event: " + error}/>		
		}
		if (event) {
			return <Event event={event} />;
		} 
		return <Loading />

	}
}

export default GetEvent;