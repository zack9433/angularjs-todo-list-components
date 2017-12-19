export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const LOAD_TODOS = 'LOAD_TODOS';
export const UPDATE_TODO_TEXT = 'UPDATE_TODO_TEXT';
export const UPDATE_TODO_DONE = 'UPDATE_TODO_DONE';

export const loadTodos = function(todos) {
    return {
        type: LOAD_TODOS,
        payload: todos
    };
};

export const addTodo = function(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    };
};

export const updateTodoText = function(event) {
    return {
        type: UPDATE_TODO_TEXT,
        payload: event
    };
};

export const updateTodoDone = function(event) {
    return {
        type: UPDATE_TODO_DONE,
        payload: event
    };
};

export const removeTodo = function(event) {
    return {
        type: REMOVE_TODO,
        payload: event
    };
};
