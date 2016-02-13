'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//from actions/index.js-----------------------------//
var nextTodoId = 0;
var addToDo = function addToDo(text) {
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text: text
	};
};

var setVisibilityFilter = function setVisibilityFilter(filter) {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter: filter
	};
};

var toggleTodo = function toggleTodo(id) {
	return {
		type: 'TOGGLE_TODO',
		id: id
	};
};

//end of actions/index.js-----------------------------//

//from reducers/todos.js------------------------------//

//******USE MORI************//

var todo = function todo(state, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			};
		case 'TOGGLE_TODO':
			if (state.id !== action.id) {
				return state;
			}

			return _extends({}, state, {
				completed: !state.completed
			});
		default:
			return state;
	}
};

//end of reducers/todos.js------------------------------//
//from index.js --------------------------------------//
// Provider is from ReactRedux
var store = ReactRedux.createStore(todoApp = {});

ReactDOM.render(React.createElement(
	Provider,
	{ store: store },
	React.createElement(App, null)
), document.getElementById('root'));

//end of index.js --------------------------------------
