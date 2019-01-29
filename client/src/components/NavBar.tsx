import * as React from "react";
import { Link } from "react-router-dom";

export default () => {
	return (
		<nav className="teal lighten-1">
			<div className="nav-wrapper container">
				<Link id="logo-container" className="brand-logo" to="/">
					Home 
					<i className="large material-icons">home</i>
				</Link>
			</div>
		</nav>
	);
};
