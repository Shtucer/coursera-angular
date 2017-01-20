(function() {
    'use strict';
    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html'
            })

            .state('categories', {
                url: '/categories',
                controller: 'CategoriesController as categoriesCtrl',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                },

                templateUrl: 'templates/categories.html'
            })
            .state('categories.category', {
                url: '/{shortCategoryName}',
                controller: 'CategoryDetailController as categoryDetailCtrl',
                resolve: {
                    categoryItems: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.shortCategoryName)
                                              .then(function(items){return items.menu_items;});
                    }]
                    },
                    templateUrl: 'templates/category.detail.html'
                
            })
            .state('categories.category.item', {
                url: '/{itemId}',
                templateUrl: 'templates/item.detail.html',
                controller: 'ItemDetailController as itemDetailCtrl'
                
            });
    }
})();
