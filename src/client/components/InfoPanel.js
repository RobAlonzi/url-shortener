import React from 'react';

import "./InfoPanel.scss";

const InfoPanel = ({children, type}) => {
	let panelClass;

	// Switching the css class for color based on type
	switch(type){
		case 'success':
			panelClass = 'green lighten-1';
			break;
		case 'error':
			panelClass = 'red lighten-1';
			break;
		default: panelClass = 'green lighten-1';
	}

	// Create the card panel with the desired content
	return (
	<div className={`card-panel ${panelClass}`}>
		{children}
	</div>
	);
};

export default InfoPanel;
