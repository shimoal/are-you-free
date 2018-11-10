import * as React from "react";
const { Component } = React;
import { BrowserRouter, Route } from "react-router-dom";

import CreateEvent from "./components/events/CreateEvent";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";

const Dashboard = () => <div>Dashboard</div>;

class App extends Component<{}, { selectedView: string }> {
	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<NavBar />
						<Route exact path="/" component={Landing} />
						<Route exact path="/events" component={Dashboard} />
						<Route exact path="/events/new" component={CreateEvent} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
