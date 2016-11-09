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

	insertData(e){
		console.log("INSERT")
		this.context.request.postRequest({
			url: 'input.js',
			data: {
				title: this.refs.title,
				description: this.refs.description
			},
			endCallback: (err, req, res)=>{
				console.log("ERROR")
				//response from server
			}
		});
	}

	render(){
		return(
			<form className="form">
				<FormGroup onSubmit={this.insertData}>
					<div className="centerText">
						<ControlLabel className="subject">Schedule</ControlLabel><br/>
					</div>
					<Grid>
						<Row className="show-grid">
							<Col xs={6} md={6}>
								<FormControl type="text" ref="title" placeholder="title"/>
							</Col>
							<Col xs={6} md={6}>
								<DatePicker value={this.state.value} onChange={this.handleChange}/>
							</Col>
						</Row>
						<FormControl componentClass="textarea" ref="description" placeholder="description"/><br/>
					</Grid>
					<Button bsStyle="info" className="right" type="submit">Add</Button>
				</FormGroup>
			</form>
		)
	}
}

export default InputSchedule
