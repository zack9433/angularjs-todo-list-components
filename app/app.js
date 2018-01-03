import 'jquery';
import angular from 'angular';
import 'angular-resource';
import 'angular-material';
import 'angular-aria';
import 'angular-animate';
import 'angular-ui-router';
import 'angular-sanitize';
import 'services/services';
import 'components/todos';
import { todoReducer } from './components/statement/todo.state.reducer';
import mainRoutes from './components/main/main.routes';

angular
    .module('angularjs-todo-list-components', [
        'ngMaterial',
        'ngResource',
        'services',
        'ui.router',
        'ngSanitize',
        'ngRedux',
        'todos'
    ])
    .config(mainRoutes)
    .config($ngReduxProvider => {
        $ngReduxProvider.createStoreWith({
            todoReducer: todoReducer
        });
    });
