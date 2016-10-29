import React, { Component, PropTypes } from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header'
import * as CounterActions from '../actions/counter'

class App extends Component {
	render() {
  		const { value, actions } = this.props;
       		return (
			<div>
				<Header />
				<h2>count={value}</h2>
				<button onClick={actions.increment}>増加</button>
				<button onClick={actions.decrement}>減少</button>
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

