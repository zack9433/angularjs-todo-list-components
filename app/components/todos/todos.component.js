import * as todoActions from '../statement/todo.list.action';
import { bindActionCreators } from 'redux';
export const TodosComponent = {
    selector: 'todos',
    template: `
        <div layout="column" layout-fill>
            <md-toolbar class="custom">
                <h1 class="text-center app-list-title">{{$ctrl.title}}</h1>
            </md-toolbar>
            <div class="container">
            <todo-form add-todo-callback="$ctrl.addTodoToService($event)"></todo-form>
            <todo-list todos="$ctrl.data.todos"
                on-update-callback="$ctrl.updateText($event)"
                on-done-callback="$ctrl.updateDone($event)"
                on-remove-callback="$ctrl.removeTodoFromService($event)">
            </todo-list>
            </div>
    	</div>
    `,
    controller: class TodosController {
        /* @ngInject */
        constructor($scope, $log, $ngRedux, TodoListService) {
            this.title = 'TodoApp';
            this._scope = $scope;
            this._console = $log;
            this._redux = $ngRedux;
            this._service = TodoListService;
        }

        $onInit() {
            // Bind actions with an object.
            this.actionCreator = bindActionCreators(todoActions, this._redux.dispatch);
            this.unsubscribe = this._redux.connect(
                this.mapStateToThis,
                this.actionCreator
            )(this);

            this._service.getAll().then(todos => {
                this.actionCreator.loadTodos(todos);
            });
        }

        mapStateToThis(state) {
            return {
                data: state.listReducer
            };
        }

        addTodoToService(event) {
            const todo = {
                id: this.data.todos.length + 1,
                text: event.text,
                done: false
            };
            this.actionCreator.addTodo(todo);
            this._service.store(todo);
        }

        updateDone(event) {
            this.actionCreator.updateTodoDone(event);
            this._service.storeAllTodo(this.data.todos);
        }

        updateText(event) {
            this.actionCreator.updateTodoText(event);
            this._service.storeAllTodo(this.data.todos);
        }

        removeTodoFromService(event) {
            this.actionCreator.removeTodo(event);
            this._service.storeAllTodo(this.data.todos);
        }
    }
};
