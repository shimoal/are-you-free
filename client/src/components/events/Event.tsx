import * as React from "react";
const { Component } = React;
import axios from "axios";
import { RouteComponentProps } from "react-router-dom";

interface IMatchParams {
    linkID: string
}

class Event extends Component<{} & RouteComponentProps<IMatchParams>> {
	componentDidMount() {
		const {linkID} = this.props.match.params;
		axios.get('/event/' + linkID)
		.then((response) => console.log('link response', response))
		.catch((response) => console.log('error', response));
	}

	render() {
		return <div>
			<h1>Single Event Page</h1>
		</div>
	}
}

export default Event;