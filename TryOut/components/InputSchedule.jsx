import React, { Component, PropTypes } from "react"
import DatePicker from 'react-bootstrap-date-picker'
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';

import { Grid, Row, Col } from 'react-bootstrap';

class InputSchedule extends Component {
	
	constructor(props) {
		super(props);
	     	this.state = {
			date: new Date().toISOString(),
			title:"",
			description:""
		};
		this.onChange = this.onChange.bind(this);
	}  
	
	/*
     	handleChange(value){
		//value is an ISO String. 
		this.setState({
			value: value
		});
	}
	*/

	onChange(e) {
    		let state = {};
	 	state[e.target.name] =  e.target.value;
		this.setState(state);
		console.dir(this.state);
  	}

	insertData(e){
		console.log("########")
		
		this.context.request.postRequest({
			url: 'input.js',
			data: this.state,
			endCallback: (err, req, res)=>{
				console.log("ERROR")
				//response from server
			}
		});
		
	}

	render(){
		return(
			<form className="form" onSubmit={this.insertData}>
				<FormGroup>
					<div className="centerText">
						<ControlLabel className="subject">Schedule</ControlLabel><br/>
					</div>
					<Grid>
						<Row className="show-grid">
							<Col xs={6} md={6}>
								<FormControl type="text" name="title" ref="title" placeholder="title" onChange={this.onChange}/>
							</Col>
							<Col xs={6} md={6}>
								<DatePicker name="date" value={this.state.date} onChange={this.onChange}/>
							</Col>
						</Row>
						<FormControl componentClass="textarea" name="description" ref="description" placeholder="description" onChange={this.onChange}/><br/>
					</Grid>
					<Button bsStyle="info" className="right" type="submit">Add</Button>
				</FormGroup>
			</form>
		)
	}
}

export default InputSchedule
