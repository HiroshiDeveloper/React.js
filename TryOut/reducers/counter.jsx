import { INCREMENT, DECREMENT } from '../constants/ActionTypes'

const initialState = {
	  value: 0
}

export default function counter(state = initialState, action) {
	switch (action.type) {
	  	case 'INCREMENT':
	    		return { value: state.value + 1 }
		case 'DECREMENT':
      			return { value: state.value - 1 }
  		default:
			return state
	}
}
