import React from 'react';
import {
	Sparklines,
	SparklinesLine,
	SparklinesReferenceLine
} from 'react-sparklines';

const average = data => {
	console.log(data);

	return Math.round(data.reduce((a, b) => a + b, 0) / data.length);
};

export default props => {
	return (
		<div>
			<Sparklines height={100} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type='avg' />
			</Sparklines>
			<div>
				{average(props.data)}
				{props.units}
			</div>
		</div>
	);
};
