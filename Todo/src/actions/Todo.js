import * as Todo from '../constants/Todo';

export function addTodo(name, dueTo) {
      	return {
	  	type: Todo.ADD_TODO,
		todo: {name, dueTo},
	};
}

export function delTodo(id) {
       	return {
	  	type: Todo.DEL_TODO,
		id,
	};
}

export function changeDidFlag(id, flag) {
       	return {
	  	type: Todo.DEL_TODO,
		id,
		flag,
	};
}

export function saveTodoList(data) {
	return dispatch => {
	  	dispatch(saveTodoListRequest());
		Axios.post('/todo_list', data).then(
				response => dispatch(saveTodoListResult(response.data.result))
		).catch(
			() => dispatch(saveTodoListResult(false))
		);
	};
}

function saveTodoListRequest() {
	  return {
		      type: Todo.SAVE_LIST_AJAX_REQUEST,
		        };
}

function saveTodoListResult(result) {
	  return {
		      type: Todo.SAVE_LIST_AJAX_RESULT,
		          result,
			    };
}
