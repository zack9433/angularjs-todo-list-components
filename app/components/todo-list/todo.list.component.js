export const TodoListComponent = {
    selector: 'todoList',
    templateUrl: './components/todo-list/view.html',
    bindings: {
        todos: '<',
        onUpdateCallback: '&',
        onDoneCallback: '&',
        onRemoveCallback: '&'
    },
    controller: class TodoListController {
        /* @ngInject */
        constructor($log) {
            this._console = $log;
        }

        $onInit() {
            this._console.log('TodoList initialized');
        }
    }
};
