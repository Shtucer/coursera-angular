(function() {
    'use strict';
    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$http', 'ApiBasePath'];

    function MenuDataService($http, ApiBasePath) {
        var menuDataService = this;
        menuDataService.getAllCategories = function() {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            }).then(function(result) {
                return result.data;
            }).catch(function(error) {
                console.log("Error!", error);
            });
        };
        menuDataService.getItemsForCategory = function(categoryShortName) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json"),
                params: {
                    "category": categoryShortName
                }
            }).then(function(result) {
                return result.data;
            }).catch(function(error){
                console.log("Can't retrieve items for category '" + categoryShortName +"'", error);
                return error;
            });

        };
    };

})();
