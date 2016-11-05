import React, { Component, PropTypes } from "react"
//import DatePicker from "../src/datepicker.jsx"
import DatePicker from 'react-bootstrap-date-picker'
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

class Input extends Component {
	
	/*
	getInitialState(){
		console.log("TEST");
		return {
			value: new Date().toISOString()
		}
    	}
	*/

	constructor(props) {
		super(props);
	     	this.state = {
			value: new Date().toISOString()
		};
		this.handleChange = this.handleChange.bind(this);
	}  

     	handleChange(value){
		console.log("PASS")
		//value is an ISO String. 
		this.setState({
			value: value
		});
	}
	render(){
		return(
			<FormGroup>
				<ControlLabel>DATE</ControlLabel>
				<DatePicker value={this.state.value} onChange={this.handleChange} /><br/>
				<ControlLabel>TITLE</ControlLabel><br/>
				<FormControl type="text" /><br /><br/>
				<ControlLabel>DESCRIPTION</ControlLabel><br/>
				<FormControl type="text" />
			</FormGroup>
		)
	}
}

export default Input
