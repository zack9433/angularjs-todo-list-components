import './todo.item.css';

export const TodoItemComponent = {
    selector: 'todoItem',
    templateUrl: './components/todo-item/view.html',
    bindings: {
        todo: '<',
        onUpdateCallback: '&',
        onDoneCallback: '&',
        onRemoveCallback: '&'
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
                    id: this.todo.id,
                    text: this.todo.text
                }
            });
        }

        removeTodo() {
            this.onRemoveCallback({
                $event: {
                    id: this.todo.id
                }
            });
        }

        updateDone() {
            this.isDone = !this.isDone;
            this.onDoneCallback({
                $event: {
                    id: this.todo.id,
                    done: this.isDone
                }
            });
        }

    }
};
