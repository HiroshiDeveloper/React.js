import React, { Component, PropTypes } from 'react';

export default class Box extends Component {
       	constructor(props) {
	  	super(props);
 	}
	 
     	render() {
		return (
	  		<div className="panel panel-default">
  				<div className="panel-body">
					{this.props.children}
					{/* 親コンポーネントから渡ってきた関数をそのまま実行 */}
					<button className="btn btn-primary" onClick={() => this.props. changeShowBoxFunc(false)}>Close</button>
				</div>
			</div>
		);
	}
}

Box.propTypes = {
	children: PropTypes.any.isRequired,
       	changeShowBoxFunc: PropTypes.func,
};
