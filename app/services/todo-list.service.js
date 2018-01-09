const TASKS = 'tasks';

function getAllStored() {
    return JSON.parse(window.sessionStorage.getItem(TASKS)) || [];
}

function storeAll(todos) {
    window.sessionStorage.setItem(TASKS, JSON.stringify(todos));
}

export default class TodoListService {
    /* @ngInject */
    constructor($log, $q) {
        this._console = $log;
        // used to simulate http promise
        this._q = $q;
        getAllStored.bind(this);
    }

    store(todo) {
        this._console.log('Storing' + JSON.stringify(todo));
        const todos = getAllStored();
        todos.push(todo);
        storeAll(todos);
        return this._q.resolve(todo);
    }

    getAll() {
        return this._q.resolve(getAllStored());
    }

    update(todo) {
        this._console.log('Update ' + todo.id);
        const todos = getAllStored().map(t => (t.id === todo.id ? todo : t));
        storeAll(todos);
        return this._q.resolve(todo);
    }

    deleteOne(todo) {
        this._console.log('Delete ' + JSON.stringify(todo.id));
        const todos = getAllStored();
        todos.splice(todo.id - 1, 1);
        for (let i = 1; i <= todos.length; i++) {
            todos[i - 1].id = i;
        }
        this._console.log(todos);
        storeAll(todos);
        return this._q.resolve(todo);
    }
}
