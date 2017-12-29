export const TodoBoardComponent = {
    selector: 'todoBoard',
    templateUrl: './components/todo-board/view.html',
    bindings: {
        board: '<'
    },
    controller: class TodoBoardController {
        constructor(TodoListService) {
            this._service = TodoListService;
        }

        addTodo(event) {
            const modifiedEvent = {
                boardId: this.board.id,
                todo: {
                    id: this.board.todos.length + 1,
                    text: event.text,
                    done: false
                }
            };
            console.log('add todo to service:');
            console.log(modifiedEvent);
            this._service.addTodo(modifiedEvent);
        }

        updateTodo(event) {
            // Add board id to event objects.
            this._service.updateTodo({...event, boardId: this.board.id});
        }

    }
};
