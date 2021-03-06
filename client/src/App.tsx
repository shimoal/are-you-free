import * as React from "react";
const { Component } = React;
import { BrowserRouter, Route } from "react-router-dom";

import CreateEvent from "./components/events/CreateEvent";
import EventCreated from "./components/events/EventCreated";
import EventError from "./components/events/EventError";
import GetEvent from "./components/events/GetEvent";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";

class App extends Component<{}, { selectedView: string }> {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<NavBar />
						<div className="container">
							<Route exact path="/" component={Landing} />
							<Route
								exact
								path="/events/created/:linkID"
								component={EventCreated}
							/>
							<Route path="/event/:linkID" component={GetEvent} />
							<Route exact path="/events/new" component={CreateEvent} />
							<Route
								exact
								path="/events/error"
								component={EventError}
								errorMessage="There was an error creating your event. Please try again"
							/>
						</div>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
