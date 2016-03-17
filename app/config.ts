import {name as headerControlledName} from './controller/HeaderController'

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('root', {
        url: "/",
        views: {
            header: {
                templateUrl: 'view/header.html',
                controller: headerControlledName
            },
            items: {
                templateUrl: 'view/items.html',
                controller: 'ItemsController'
            },
            footer: {
                templateUrl: 'view/footer.html',
                controller: 'FooterController'
            }
        }
    });
}

export default config;
