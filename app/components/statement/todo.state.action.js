import * as TodoType from './todo.state.config';

export const loadBoards = function(boards) {
    return {
        type: TodoType.LOAD_BOARDS,
        payload: boards
    };
};


export const loadTodos = function(todos) {
    return {
        type: TodoType.LOAD_TODOS,
        payload: todos
    };
};

export const addTodo = function(event) {
    return {
        type: TodoType.ADD_TODO,
        payload: event
    };
};

export const updateTodoText = function(event) {
    return {
        type: TodoType.UPDATE_TODO_TEXT,
        payload: event
    };
};

export const updateTodoDone = function(event) {
    return {
        type: TodoType.UPDATE_TODO_DONE,
        payload: event
    };
};

export const removeTodo = function(event) {
    return {
        type: TodoType.REMOVE_TODO,
        payload: event
    };
};
