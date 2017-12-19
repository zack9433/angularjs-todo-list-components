
import {LOAD_TODOS, UPDATE_TODO_DONE, UPDATE_TODO_TEXT, ADD_TODO, REMOVE_TODO} from './todo.list.action';

/**
 * Set up initial state.
 *
 * State = {
 *   todos: [
 *     { id: id, text: text, done: done}
 *   ]
 * }
 * @param todos An array containing all todo items.
 * @param id An integer number. A identification of item.
 * @param text A String type. The content of item.
 * @param done An boolean value.
 */
const initialState = {
    todos: []
};

// Set up reducer functions.
function updateTodoText(state, action) {
    let todos = [...state.todos];
    todos = todos.map(t => {
        if (t.id === action.payload.id) {
            t.text = action.payload.text;
        }
        return t;
    });
    return {
        ...state, todos
    };
}

function updateTodoDone(state, action) {
    let todos = [...state.todos];
    todos = todos.map(t => {
        if (t.id === action.payload.id) {
            t.done = action.payload.done;
        }
        return t;
    });
    return {
        ...state, todos
    };
}

function removeTodo(state, action) {
    const todos = state.todos.filter( todo => todo.id !== action.payload.id );
    // reset order numbers due to deleting items.
    for (let i = 0; i < todos.length; i ++) {
        todos[i].id = i + 1;
    }
    return {
        ...state, todos
    };
}

function loadTodos(state, action) {
    return {
        ...state, todos: action.payload
    };
}

function addTodo(state, action) {
    const todo = action.payload;
    const todos = [...state.todos, todo];
    return {
        ...state, todos
    };
}

// Organize the reducer.
export const listReducer = function(state = initialState, action) {
    switch (action.type) {
    case LOAD_TODOS:
        return loadTodos(state, action);
    case ADD_TODO:
        return addTodo(state, action);
    case REMOVE_TODO:
        return removeTodo(state, action);
    case UPDATE_TODO_TEXT:
        return updateTodoText(state, action);
    case UPDATE_TODO_DONE:
        return updateTodoDone(state, action);
    default:
        return state;
    }
};
