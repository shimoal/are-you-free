import * as React from "react";
const { Component } = React;
import { BrowserRouter, Route } from "react-router-dom";

import CreateEvent from "./components/events/CreateEvent";
import Event from './components/events/Event';
import EventCreated from "./components/events/EventCreated";
import EventError from "./components/events/EventError";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";

class App extends Component<{}, { selectedView: string }> {
	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<NavBar />
						<Route exact path="/" component={Landing} />
						<Route exact path="/events/created/:linkID" component={EventCreated} />
						<Route path="/event/:linkID" component={Event} />
						<Route exact path="/events/new" component={CreateEvent} />
						<Route exact path="/events/error" component={EventError} errorMessage="There was an error creating your event. Please try again" />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
