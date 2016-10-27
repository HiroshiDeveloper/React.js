import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TodoActions from '../actions/Todo';

import Box from './Box';
import PostalCodeAjax from './PostalCodeAjax';

export default class Root extends Component {
	constructor(props) {
	  	super(props);
		this.state = {
			showBox: true,
		};
 	}

	handleClick(){
		this.setState({showBox: !this.state.showBox});
	}

	changeShowBox(bool){
		this.setState({showBox: bool});
	}

	render() {
		const btnName = this.state.showBox ? 'Box非表示' : 'Box表示';
	 	const boxTitle = this.state.boxTitle;
		const boxComponent = this.state.showBox ? (
	  	
				<Box changeShowBoxFunc={(bool) => this.changeShowBox(bool)}>Sample Box</Box>
			) : null;
	
	
		return (
			<div className="container">
				<h1>{this.props.title}</h1>
		  		{boxComponent}
	  
	  	  		{/* onClick イベントが呼び出された時に handleClick() を呼び出す */}
	  	
		  		<button className="btn btn-primary" onClick={() => this.handleClick()}>{btnName}</button>
	  			<div>
	  				{this.props.children}
				</div>
			</div>
		);
	}
}

Root.propTypes = {
	title: PropTypes.string.isRequired,
 	children: PropTypes.any.isRequired,
};
