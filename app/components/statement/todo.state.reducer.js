import * as TodoType from './todo.state.config';

/**
 * Set up initial state.
 *
 * State = {
 *   boards: [
 *     {
 *       id: board-id,
 *       name: board-name,
 *       todos: [
 *               { id: id, text: text, done: done}
 *              ]
 *      }
 *
 *   ]
 *
 * }
 */
const initialState = {
    boards: []
};

function loadBoards(state, action) {
    return {
        ...state, boards: action.payload
    };
}

/**
 * @param  {function} actionFn define the behaviour between a board and a new todo.
 *
 * - actionFn(board, todo);
 * @param {object} board
 * @param {object} payload
 *
 * Notice: payload must have a [boardId] property.
 */
function findBoard(state, action, actionFn) {
    const payload = action.payload;
    console.log('reducer payload:');
    console.log(payload);
    const boards = [...state.boards];
    boards.map( board => {
        if (payload.boardId === board.id) {
            actionFn(board, payload);
        }
    });
    return {boards: boards};
}

function updateTodoText(state, action) {
    return findBoard(state, action, (board, payload) => {
        board.todos.map( t => {
            if (t.id === payload.todo.id) {
                t.text = payload.todo.text;
            }
        }
        );
    });
}

function updateTodoDone(state, action) {
    return findBoard(state, action, (board, payload) => {
        board.todos.map( t => {
            if (t.id === payload.todo.id) {
                t.done = payload.todo.done;
            }
        }
        );
    });
}

function addTodo(state, action) {
    return findBoard(state, action, (board, payload) => {
        board.todos.push(payload.todo);
    });
}

function removeTodo(state, action) {
    return findBoard(state, action, (board, payload) => {
        board.todos = board.todos.filter( t => t.id !== payload.todo.id );
        for (let i = 0; i < board.todos.length; i ++) {
            board.todos[i].id = i + 1;
        }
    });
}

/**
 * Reducer.
 */
export const todoReducer = function(state = initialState, action) {
    switch (action.type) {
    case TodoType.LOAD_BOARDS:
        return loadBoards(state, action);
    case TodoType.ADD_TODO:
        return addTodo(state, action);
    case TodoType.REMOVE_TODO:
        return removeTodo(state, action);
    case TodoType.UPDATE_TODO_TEXT:
        return updateTodoText(state, action);
    case TodoType.UPDATE_TODO_DONE:
        return updateTodoDone(state, action);
    default:
        return state;
    }
};
