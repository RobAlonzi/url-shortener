import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shortenURL } from '../actions/shorten';

class ShortenForm extends Component{
	constructor(props){
		super(props);
		
		this.state = { textValue : "" }
		
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

	}

	// Only reset the text value if there are no errors
	componentWillReceiveProps(nextProps){
		if(!nextProps.shorten.error && nextProps.shorten.createdURL){
			this.setState({textValue: ""});
		}
	}

	// Set the text value state every time it is updated
	onChange(e){
		this.setState({ textValue: e.target.value });
	}

	// Submit the form
	onSubmit(e){
		e.preventDefault();
		this.props.shortenURL(this.state.textValue);
	}

	render(){
		let { isLoading } = this.props.shorten;
		return (
			<div className="row shortener">
				<form className="col s12" onSubmit={this.onSubmit} >
					<div className="row">
						<div className="input-field col s10">
							<input 
								placeholder="Shorten URL..." id="url" type="text" 
								value={this.state.textValue}
								onChange={this.onChange}
								disabled={isLoading}
							/>
						</div>
						<div className="input-field col s2">
							<button className={`btn waves-effect waves-light btn-large ${isLoading ? "disabled" : "" }`} type="submit">
								Shorten
							</button> 
						</div>
					</div>
				</form>
			</div>
		);
	}
};

export default connect(state => { return { shorten : state.shorten }}, { shortenURL })(ShortenForm);

