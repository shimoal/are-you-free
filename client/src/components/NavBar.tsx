import * as React from "react";

export default () => {
	return (
		<nav className="light-blue lighten-1">
			<div className="nav-wrapper container">
				<a id="logo-container" className="brand-logo" href="#">
					Logo
				</a>
				<ul className="right hide-on-med-and-down">
					<li>
						<a href="#">Navbar Link</a>
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
