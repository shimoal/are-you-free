import * as React from "react";
import { Link } from "react-router-dom";

export default () => {
	return (
		<nav className="teal lighten-1">
			<div className="nav-wrapper container">
				<Link id="logo-container" className="brand-logo" to="/">
					Home (Logo)
				</Link>
				<ul className="right hide-on-med-and-down">
					<li>
						<Link to="/">Navbar Link</Link>
					</li>
				</ul>
				<ul
					id="nav-mobile"
					className="sidenav"
					style={{ transform: "translateX(-105%)" }}
				>
					<li>
						<a href="#">Navbar Link</a>
					</li>
				</ul>
				<a className="sidenav-trigger" href="#" data-target="nav-mobile">
					<i className="material-icons">menu</i>
				</a>
			</div>
		</nav>
	);
};
