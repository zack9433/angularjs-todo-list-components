import './todo.item.css';
import * as TodoType from '../statement/todo.state.config';

export const TodoItemComponent = {
    selector: 'todoItem',
    templateUrl: './components/todo-item/view.html',
    bindings: {
        todo: '<',
        onUpdateCallback: '&'
    },
    controller: class TodoItemController {
        constructor($log) {
            this._console = $log;
        }

        $onInit() {
            // Local state
            this.editable = false;
        }

        updateEditable() {
            this.editable = !this.editable;
        }

        saveTodo() {
            this.updateEditable();
            this.onUpdateCallback({
                $event: {
                    type: TodoType.UPDATE_TODO_TEXT,
                    todo: this.todo
                }
            });
        }

        removeTodo() {
            this.onUpdateCallback({
                $event: {
                    type: TodoType.REMOVE_TODO,
                    todo: this.todo
                }
            });
        }

        updateDone() {
            this.todo.done = !this.todo.done;
            this.onUpdateCallback({
                $event: {
                    type: TodoType.UPDATE_TODO_DONE,
                    todo: this.todo
                }
            });
        }

    }
};
