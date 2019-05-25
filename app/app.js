import 'angular-material/angular-material.scss';
import 'jquery';
import angular from 'angular';
import 'angular-resource';
import 'angular-ui-router';
import 'angular-sanitize';

import 'services/services';
import 'directives/directives';
import 'services/services';
import 'components/todos/todos.component';

import mainRoutes from 'components/main/main.routes';
import 'angular-material';
import 'angular-animate';
import 'angular-aria';

angular
    .module('angularjs-todo-list-components', [
        'ngResource',
        'ui.router',
        'services',
        'directives',
        'ngSanitize',
        'todos',
        'ngMaterial',
        'ngAnimate',
        'ngAria'
    ])

    .config(mainRoutes);
