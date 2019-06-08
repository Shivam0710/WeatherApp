import React from 'react';

// class Weather extends React.Component {
// 	render() {
// 		return(
			
// 		);
// 	}
// }

const Weather = props => (
	<div>
		{ props.city && <p> city : {props.city}, {props.country} </p>}
		{ props.temperature && <p> Temperature : {props.temperature} </p>}
		{ props.humidity && <p> Humidity : {props.humidity} </p>}
		{ props.description && <p> Condition : {props.description} </p>}
		{ props.error && <p> {props.error} </p>}
	</div>
);



export default Weather;