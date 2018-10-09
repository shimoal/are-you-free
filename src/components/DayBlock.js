import React from 'react';

import '../styles/DayBlock.css';

export default function(props) {
	return <div className="day">
			{props.name}
	</div>;
}