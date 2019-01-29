import * as React from 'react';

interface IProps {
	onClick: () => void
}

export default (props: IProps) => {
	return <button onClick={props.onClick}>Cancel</button>
}