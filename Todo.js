
//from actions/index.js-----------------------------//
let nextTodoId = 0;
const addToDo = (text) => {
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text
	}
};

const setVisibilityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
};

const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
};

//end of actions/index.js-----------------------------//

//from reducers/todos.js------------------------------//

//******USE MORI************//

const todo = (state, action) => {
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

			return {
				...state,
				completed: !state.completed
			};
		default:
			return state;
	}
};

//end of reducers/todos.js------------------------------//
//from index.js --------------------------------------//
// Provider is from ReactRedux
let store = ReactRedux.createStore(todoApp);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

//end of index.js --------------------------------------