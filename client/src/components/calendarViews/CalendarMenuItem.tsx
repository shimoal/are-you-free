import * as React from "react";

export default function(props: {
	selectedView: string;
	setView: (view: string) => void;
	view: string;
}) {
	const { selectedView, setView, view } = props;

	const viewName = view.charAt(0).toUpperCase() + view.slice(1);
	const className = selectedView === view ? "selected" : "default";

	return (
		<div className={className} onClick={() => setView(view)}>
			{viewName} View
		</div>
	);
}
