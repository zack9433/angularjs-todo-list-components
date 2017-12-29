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
