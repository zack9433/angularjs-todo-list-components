import getCurrentLinkFromRoute from 'angular-material';
export const TodosComponent = {
    selector: 'todos',
    template: `
        <div layout="column" layout-fill>
            <md-toolbar class="custom">
                <h1 class="text-center app-list-title">{{$ctrl.title}}</h1>
            </md-toolbar>
            <div class="container">
                <md-nav-bar md-selected-nav-item="currentNavItem">
                    <md-nav-item ng-repeat="board in $ctrl.boards track by $index"
                    md-nav-sref="board({boardId: '{{board.id}}'})" name="{{board.name}}">{{board.name}}</md-nav-item>
                </md-nav-bar>
                <ui-view></ui-view>
            </div>
    	</div>
    `,
    controller: class TodosController {
        /* @ngInject */
        constructor($scope, $log, TodoListService) {
            this.title = 'TodoApp';
            this._scope = $scope;
            this._console = $log;
            this._service = TodoListService;

            this._scope.$on('$routeChangeSuccess', function(event, current) {
                $scope.currentLink = getCurrentLinkFromRoute(current);
            });
        }

        $onInit() {
            this._service.fetchAllBoards().then(
                 boards => {
                     this.boards = boards;
                 }
             );
        }
    }
};
