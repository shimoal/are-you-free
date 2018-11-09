import * as React from "react";

export default () => {
	return (
		<div>
			<h1 className="header center orange-text">Are You Free?</h1>
			<div className="row center">
				<h5 className="header col s12 light">
					Easy and simple event coordination for groups!
				</h5>
			</div>
			<div className="row center">
				<a
					href="/events/new"
					className="btn-large waves-effect waves-light orange"
				>
					Create an Event
				</a>
			</div>
		</div>
	);
};
