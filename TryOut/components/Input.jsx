import React, { Component, PropTypes } from "react"
import DatePicker from 'react-bootstrap-date-picker';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

class Input extends Component {
	getInitialState(){
		return {
			value: new Date().toISOString()
		}
    	}
     	handleChange(value) {
		//value is an ISO String. 
		this.setState({
			value: value
		});
	}
	render(){
		return(
			<FormGroup>
				<ControlLabel>DATE</ControlLabel>
				<DatePicker value={this.props.value} onChange={this.handleChange} /><br/>
				<ControlLabel>TITLE</ControlLabel><br/>
				<ControlLabel>DESCRIPTION</ControlLabel>
			</FormGroup>
		)
	}
}

export default Input
