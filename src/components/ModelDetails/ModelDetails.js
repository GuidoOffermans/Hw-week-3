import React from 'react';

function ModelDetails(props) {
	const { name, manufacturer, year, origin } = props.model;
	return (
		<div>
			<ul>
				<li>Name: {name}</li>
				<li>Manufacturer: {manufacturer}</li>
				<li>Year: {year}</li>
				<li>Origin: {origin}</li>
			</ul>
		</div>
	);
}

export default ModelDetails;
