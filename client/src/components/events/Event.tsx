import * as React from "react";
const { Component } = React;
import axios from "axios";
import { RouteComponentProps } from "react-router-dom";

interface IMatchParams {
  linkID: string
}

class Event extends Component<{} & RouteComponentProps<IMatchParams>> {
	state = {
		createdBy: "",
		title: ""
	};

	componentDidMount() {
		const {linkID} = this.props.match.params;
		axios.get('/event/' + linkID)
		.then(({data: {title, createdBy}}) => {
			this.setState({title, createdBy});
		})
		.catch((error) => console.log('error', error));
	}

	render() {
		return <div>
			<h1>{this.state.title}</h1>
			<h5>Event Created By: {this.state.createdBy}</h5>
		</div>
	}
}

export default Event;