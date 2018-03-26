import React from 'react';
import { Link } from "react-router-dom";
import Moment from "react-moment";

import "./RecentURLItem.scss";

// Recent URL Item Component. 
// Each created URL on the Homepage will be created with this component
const RecentURLItem = (props) => {
	let {_id, url, created, count, shortUrl } = props;

  return (
	<Link className="collection-item recent-url-item" to={`/u/${_id}/details`}>
		<div className="row">
			<div className="col s10">
				<h5>{url}</h5>
				<p>Created On: <Moment date={created} format="MMMM Do YYYY, h:mm:ss A" /></p>
			</div>
			<div className="col s2">
				<span className="new badge" data-badge-caption={count > 1 || count == 0 ? "Visits" : "Visit"}>{count}</span>
			</div>
		</div>	
	</Link>
  );
};

export default RecentURLItem;
