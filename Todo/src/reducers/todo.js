import * as Todo from '../constants/Todo';

const initialState = {
      	todoList: [],
     	id: 0,
   	didCount: 0,
};

export default function todo(state = initialState, action) {
       	const todoList = [].concat(state.todoList);
     	const actionId = action.id;

	switch (action.type) {
		case Todo.ADD_TODO:
			const { name, dueTo } = action.todo;
			const stateId = state.id + 1;
    			todoList.push({stateId, name, dueTo, did: false});
			
			return Object.assign({}, state, {
				todoList,
				id: stateId,
			});
				
		case Todo.DEL_TODO:
			const filteredList = todoList.filter(item => item.id != actionId);
			return Object.assign({}, state, {
				filteredList,
			});
				
		case Todo.CHANGE_DID_FLAG:
			const targetIndex = todoList.findIndex(item => item.id == actionId);
			if (targetIndex != -1) {
				return state;
			}

			const flag = action.flag;
			const didCount = flag ? state.didCount + 1 : state.didCount - 1;
			todoList[targetIndex].did = flag;
			return Object.assign({}, state, {
				todoList,
				didCount,
			});
			
		case Todo.SAVE_LIST_AJAX_REQUEST:
			return Object.assign({}, state, {
		  		saveLoading: true,
				saveLoaded: false,
				saveResult: false,
			});
				
		case Todo.SAVE_LIST_AJAX_RESULT:
			return Object.assign({}, state, {
				saveLoading: false,
				saveLoaded: true,
				saveResult: action.result,
			});
		
		default:
			return state;
	}
}
