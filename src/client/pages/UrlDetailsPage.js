import React, { Component } from 'react';
import { connect } from 'react-redux';

import VisitorInfoItem from "../components/VisitorInfoItem";
import { getURLDetails } from '../actions/details';

import "./UrlDetailsPage.scss";

class UrlDetailsPage extends Component {

  constructor(props){
	super(props);
	
	// Make the API call to get URL Details
	this.props.getURLDetails(this.props.match.params.id);

    this.renderList = this.renderList.bind(this);
  }

  renderList(visitors){
    // Reverse first to get the most recent at the front
    return visitors.reverse().map(visitor => {
      return <VisitorInfoItem key={visitor._id} {...visitor} />;
    })
  }

  render() {
    let { details } = this.props;
    let { url, count, visitors, shortUrl } = details.urlDetails;

    return (
      <div className="container url-details">
        <div className="section intro">
          <h5><a href={shortUrl} target="_blank">{shortUrl}</a> <i class="large material-icons">arrow_forward</i> {url} </h5>
		  <p>This link has been used <strong>{count} time{count > 1 || count === 0 ? "s" : null}</strong></p>
        </div>

        {visitors && visitors.length ?
          this.renderList(visitors)
        : null }
        
      </div>  
    );
  }
}

export default connect(state => { return { details : state.details }}, {getURLDetails})(UrlDetailsPage)