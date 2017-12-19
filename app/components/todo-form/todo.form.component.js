export const TodoFormComponent = {
    selector: 'todoForm',
    templateUrl: './components/todo-form/view.html',
    bindings: {
        addTodoCallback: '&'
    },
    controller: class TodoFormController {
        /* @ngInject */
        constructor($log) {
            this._console = $log;
        }

        $onInit() {
            this._console.log('TodoForm initialized');
        }

        addTodo() {
            this.addTodoCallback({
                $event: {
                    text: this.todoText
                }
            });
            this.todoText = null;
        }
    }
};
