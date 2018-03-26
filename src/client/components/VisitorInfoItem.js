import React from 'react';
import Moment from 'react-moment';

// Visitor Info Item Component. 
// Each visitor detail on the URL details page will be created with this component
const VisitorInfoItem = (props) => {
  let {_id, ipAddress, date, deviceType, browser, browserVersion, engine, os, userAgent } = props;

  return (
	<div>
		<ul className="collection with-header">
			<li className="collection-header"><h4>Visit From: {ipAddress}</h4></li>
			<li className="collection-item"><strong>Date Accessed:</strong> <Moment date={date} format="MMMM Do YYYY, h:mm:ss A" /></li>
			<li className="collection-item"><strong>Device Type:</strong> {deviceType}</li>
			<li className="collection-item"><strong>Browser:</strong> {browser} (Version {browserVersion})</li>
			<li className="collection-item"><strong>Engine:</strong> {engine}</li>
			<li className="collection-item"><strong>Operating System:</strong>{os}</li>
			<li className="collection-item"><strong>User Agent:</strong> {userAgent}</li>
		</ul>
	</div>
  );
};

export default VisitorInfoItem;
