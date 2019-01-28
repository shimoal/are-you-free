import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

interface IMatchParams {
  linkID: string
}

export default (props:  RouteComponentProps<IMatchParams>) => {
	const {linkID} = props.match.params;
	return (
		<div className="container center">
			<h4>Thank you for creating an event!</h4>
			<h5>Visit <Link to={"/event/" + linkID}>the event page</Link> to view your event</h5>
		</div>
	);
};
