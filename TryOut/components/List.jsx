import React, { Component, PropTypes } from "react"
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class List extends Component {
	render(){return(
		<BootstrapTable data={products} insertRow={true} deleteRow={true} selectRow={selectRowProp}>
			<TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
			<TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
	       		<TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
		</BootstrapTable>  
	)}
}

export default List

