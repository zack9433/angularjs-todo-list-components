export const TodoListComponent = {
    selector: 'todoList',
    templateUrl: './components/todo-list/view.html',
    bindings: {
        todos: '<',
        onUpdateCallback: '&'
    },
    controller: class TodoListController {
        /* @ngInject */
        constructor($log) {
            this._console = $log;
        }

        $onInit() {
        }
    }
};
