function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('root', {
        url: "/",
        views: {
            header: {
                templateUrl: 'view/header.html',
                controller: 'HeaderController'
            },
            banner: {
                templateUrl: 'view/banner.html',
                controller: 'BannerController'
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
