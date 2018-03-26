import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import ShortenForm  from "../components/ShortenForm";
import RecentURLs from "../components/RecentURLs";
import InfoPanel from "../components/InfoPanel";

// Actions
import { getURLs } from '../actions/urls';
import { clearPanels } from "../actions/shorten";

class Home extends Component {
  // Make the API call on Mount
  componentWillMount() {
    this.props.getURLs();
  }

  // Clear info panels on unmount
  componentWillUnmount(){
    this.props.clearPanels();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="s12">
            <h1>Say Goodbye to long URLs</h1> 
            <p>Use the tool below to shorten any URL before you send it to your friends</p>
          </div>
        </div>

        <div className="row">
          <div className="s12">
            <ShortenForm />
          </div>
        </div>

        { this.props.shorten.error ?
          <div className="row">
            <div className="s12">
              <InfoPanel type="error">
                  <h2>Uh Oh! <i className="material-icons">mood_bad</i></h2>
                  <p>{this.props.shorten.error}</p> 
              </InfoPanel>
            </div>
          </div>
        : null }

      
        { this.props.shorten.createdURL ?
          <div className="row">
            <div className="s12">
              <InfoPanel type="success">
                  <h2>Success! <i className="material-icons">mood</i></h2>
                  <p>Your newly created URL: <a href={this.props.shorten.createdURL} target="_blank">{this.props.shorten.createdURL}</a></p> 
              </InfoPanel>
            </div>
          </div>
        : null }

        <div className="row">
          <div className="s12">
            <RecentURLs urls={this.props.urls} />
          </div>
        </div>    
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getURLs, clearPanels }, dispatch);
}

export default connect(state => { return { shorten : state.shorten, urls : state.urls }}, mapDispatchToProps)(Home)