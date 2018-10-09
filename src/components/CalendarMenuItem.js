import React from 'react';


export default function(props) {
	const  { selectedView, setView, view } = props;
	const viewName = view.charAt(0).toUpperCase() + view.slice(1);

	return <div 
				class={selectedView === view ? 'selected' : 'default'} 
				onClick={() => setView(view)}>{viewName} View
	</div>;
}