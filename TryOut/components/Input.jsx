import React, { Component, PropTypes } from "react"
import DatePicker from 'react-bootstrap-date-picker'
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';

class Input extends Component {
	
	constructor(props) {
		super(props);
	     	this.state = {
			value: new Date().toISOString()
		};
		this.handleChange = this.handleChange.bind(this);
	}  

     	handleChange(value){
		//value is an ISO String. 
		this.setState({
			value: value
		});
	}

	insertData(){
	
	
	}

	render(){
		return(
			<FormGroup onSubmit={this.insertData}>
				<ControlLabel>DATE</ControlLabel>
				<DatePicker value={this.state.value} onChange={this.handleChange} />
				<ControlLabel>TITLE</ControlLabel><br/>
				<FormControl type="text" />
				<ControlLabel>DESCRIPTION</ControlLabel><br/>
				<FormControl type="text" /><br/>
				<Button bsStyle="info" className="right" type="submit">Add</Button>
			</FormGroup>
		)
	}
}

export default Input
