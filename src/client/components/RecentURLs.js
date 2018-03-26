import React, { Component } from 'react';

import RecentURLItem from "../components/RecentURLItem";
import LoadingSpinner from "../components/LoadingSpinner";

class RecentURLs extends Component{

	constructor(props){
		super(props);
		this.renderCollection = this.renderCollection.bind(this);
	}

	// Create each recent URL item
	renderCollection(items){
		return items.map(item => {
			return <RecentURLItem key={item._id} {...item} />
		});
	}

	render(){
		let { isLoading, urls } = this.props.urls;
		return (
			<div>
				{isLoading ?
					<div className="preloader-wrapper">
						<LoadingSpinner />
					</div>	 
				: null }

				{urls.length ?
				<div>
					<div className="row">
						<div className="col s12">
							<h3>Recently Shortened URLs</h3>
						</div>
					</div>
					<div className="row">
						<div className="col s12">
							<div className="collection">
								{this.renderCollection(urls)}
							</div>
						</div>
					</div>
				</div>	
				: null }
			</div>	
		);
	}
};

export default RecentURLs;

