import * as React from "react";
const { Component } = React;
import "./styles/App.css";

import Landing from "./components/Landing";
import NavBar from "./components/NavBar";

class App extends Component<{}, { selectedView: string }> {
	render() {
		return (
			<div className="container">
				<NavBar />
				<Landing />
			</div>
		);
	}
}

export default App;
