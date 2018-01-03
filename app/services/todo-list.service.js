import * as todoActions from '../components/statement/todo.state.action';
import * as TodoType from '../components/statement/todo.state.config';
import { bindActionCreators } from 'redux';

const BOARDS = 'BOARDS';

function getAllStored() {
    return JSON.parse(window.sessionStorage.getItem(BOARDS)) || [];
}

function storeAll(boards) {
    window.sessionStorage.setItem(BOARDS, JSON.stringify(boards));
}

export default class TodoListService {
    /* @ngInject */
    constructor($log, $q, $ngRedux) {
        this._console = $log;
        this._redux = $ngRedux;
        this._q = $q;

        getAllStored.bind(this);
        storeAll.bind(this);

        // bind redux.
        this.actionCreator = bindActionCreators(todoActions, this._redux.dispatch);
        this._redux.connect(this.mapStateToThis)(this);
    }

    mapStateToThis(state) {
        return {
            data: state.todoReducer
        };
    }

    addTodo(payload) {
        this.actionCreator.addTodo(payload);
        this.storeAllBoard(this.data.boards);
    }

    fetchAllBoards() {
        // Initialize the state.
        return this.getAll().then(boards => {
            this.actionCreator.loadBoards(boards);
            return this.data.boards;
        });
    }

    storeAllBoard(boards) {
        storeAll(boards);
    }

    getAll() {
        this.boardsCache = (this.boardsCache === undefined) ? getAllStored() : this.boardsCache;
        this.boardsCache = (this.boardsCache.length === 0) ? this.getTestData() : this.boardsCache;
        return this._q.resolve(this.boardsCache);
    }

    getTestData() {
        return [{
            id: 1,
            name: 'personal',
            todos: []
        }, {
            id: 2,
            name: 'work',
            todos: []
        }];
    }

    getBoardById(boardId) {
        const result = this.data.boards.filter( board => parseInt(boardId) === board.id);
        return result[0];
    }

    updateTodo(event) {
        switch (event.type) {
        case TodoType.UPDATE_TODO_TEXT:
            this.actionCreator.updateTodoText(event);
            break;
        case TodoType.UPDATE_TODO_DONE:
            this.actionCreator.updateTodoDone(event);
            break;
        case TodoType.REMOVE_TODO:
            this.actionCreator.removeTodo(event);
            break;
        }
        this.storeAllBoard(this.data.boards);
        this._console.log('update todo successfully!');
        this._console.log(this.data.boards);
    }
}
