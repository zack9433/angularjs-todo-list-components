import './todo-list.css';

export const TodoListComponent = {
    selector: 'todoList',
    template: `
        <div class="col-xs-12">
            <table class="table" ng-show="$ctrl.todos.length > 0">
                <caption>Count: {{$ctrl.todos.length}}</caption>
                <tr ng-repeat="todo in $ctrl.todos track by $index">
                    <td ng-class="{'task-done': todo.done}">{{todo.id}}</td>
                    <td ng-class="{'task-done': todo.done}">{{todo.text}}</td>
                    <td>
                    <div class="btn-group pull-right" data-toggle="buttons">
                        <button class="btn btn-default glyphicon glyphicon-ok" ng-click="$ctrl.onDone({$event: todo})" ng-show="!todo.done"></button>
                        <button class="btn btn-default glyphicon glyphicon-repeat" ng-click="$ctrl.onUndone({$event: todo})" ng-show="todo.done"></button>
                        <button class="btn btn-primary glyphicon glyphicon-edit" ng-click="$ctrl.onEdit({$event: todo})" ng-show="true"></button>
                        <button class="btn btn-danger glyphicon glyphicon-trash" ng-click="$ctrl.onDelete({$event: todo})" ng-show="true"></button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>`,
    bindings: {
        todos: '<',
        onDone: '&',
        onUndone: '&',
        onEdit: '&',
        onDelete: '&'
    },
    controller: class TodoListController {
        /* @ngInject */
        constructor($log, $element) {
            this._console = $log;
            this._console.log($element);
        }

        $onInit() {
            this._console.log('TodoList initialized');
        }

        $onChanges(changedObj) {
            this._console.log(
                'Changes detected in TodoList from parent component: ' +
                    JSON.stringify(changedObj)
            );
        }

        $postLink() {
            this._console.debug(arguments);
        }
    }
};
