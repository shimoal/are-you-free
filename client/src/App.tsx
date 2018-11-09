import * as React from "react";
const { Component } = React;
import "./styles/App.css";

import Landing from "./components/Landing";

class App extends Component<{}, { selectedView: string }> {
	render() {
		return (
			<div className="App">
				<Landing />
			</div>
		);
	}
}

export default App;
