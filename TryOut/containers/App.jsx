import React, { Component, PropTypes } from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/counter'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MyRawTheme from '../src/myThemeFile';

import Header from '../components/Header'
import Input from '../components/Input'
import Counter from '../components/Counter'

class App extends Component {
	
	static get childContextTypes() {
		    return { muiTheme: PropTypes.object.isRequired };
	}

	getChildContext(){
		      return {  muiTheme: getMuiTheme(MyRawTheme)};
	}

	render() {
  		const { value, actions } = this.props;
       		return (
			<div>
				<Header />
				<Input />
				<Counter value={value} actions={actions} />
			</div>
		       )
	}
}

App.propTypes = {
	value: PropTypes.number.isRequired,
     	actions: PropTypes.object.isRequired
}

// Appコンポーネントにstateを流し込む
function mapStateToProps(state) {
       	return state.counter
}

function mapDispatchToProps(dispatch) {
    	return {
		actions: bindActionCreators(CounterActions, dispatch)
	}
}
 
export default connect(
		mapStateToProps,
		mapDispatchToProps)(App)

