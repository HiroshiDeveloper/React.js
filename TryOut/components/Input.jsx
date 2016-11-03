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
			<ControlLabel>Label</ControlLabel>
				<DatePicker value={this.props.value} onChange={this.handleChange} />
				<HelpBlock>Help</HelpBlock>
			</FormGroup>
		)
	}
}

export default Input
