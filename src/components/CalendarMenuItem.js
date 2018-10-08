import React from 'react';


export default function(props) {
	const  { selectedView, setView, view } = props;
	return <div 
				class={selectedView === view ? 'selected' : 'default'} 
				onClick={() => setView(view)}>{view} View
	</div>;
}