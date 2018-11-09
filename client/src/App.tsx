import * as React from "react";
const { Component } = React;
import "./styles/App.css";

import Landing from "./components/Landing";

class App extends Component<{}, { selectedView: string }> {
	render() {
		return (
			<div className="container">
				<Landing />
			</div>
		);
	}
}

export default App;
