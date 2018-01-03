import 'components/main/main.html';
import 'components/main/main.scss';
import 'bootstrap/dist/css/bootstrap.css';

export default /*@ngInject*/ function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    const states = [
        {
            name: 'board',
            url: '/board/{boardId}',
            component: 'todoBoard',
            resolve: {
                board: function(TodoListService, $transition$) {
                    return TodoListService.getBoardById($transition$.params().boardId);
                }
            }
        }
    ];

    states.forEach(function(state) {
        $stateProvider.state(state);
    });
}
