import 'jquery';
import angular from 'angular';
import 'angular-resource';
import 'angular-material';
import 'angular-aria';
import 'angular-animate';
import 'angular-ui-router';
import 'angular-sanitize';
import 'services/services';
import 'directives/directives';
import 'components/todos';
import { listReducer } from './components/statement/todo.list.reducer';
import mainRoutes from 'components/main/main.routes';

angular
    .module('angularjs-todo-list-components', [
        'ngMaterial',
        'ngResource',
        'ui.router',
        'services',
        'directives',
        'ngSanitize',
        'ngRedux',
        'todos'
    ])
    .config(mainRoutes)
    .config($ngReduxProvider => {
        $ngReduxProvider.createStoreWith({
            listReducer: listReducer
        }, [], [window.__REDUX_DEVTOOLS_EXTENSION__()]);
    });
