(function(){
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('NarrowItDownService', NarrowItDownService)
        .directive("foundItems", FoundItemsDirective)
        .constant("ApiBasePath", "https://davids-restaurant.herokuapp.com");

    function FoundItemsDirective() {
        var ddo = {
            scope: {
                items: '<',
                onRemove: '&',
                onSearchStatus: '<'
            },
            templateUrl: "foundItems.html",
            controller: FoundItemsDirectiveController,
            controllerAs: 'found',
            bindToController: true,
        }
        return ddo;
    };

    
    function FoundItemsDirectiveController() {
        var found = this;
    };
    
    NarrowItDownController.$inject = ['NarrowItDownService'];
    function NarrowItDownController(NarrowItDownService) {
        var narrowCtl = this;
        narrowCtl.searchTerm = "";
        narrowCtl.foundItems = Array();
        narrowCtl.onSearch = function() {
            if (narrowCtl.searchTerm == "") {
                narrowCtl.foundItems.splice(0,narrowCtl.foundItems.length);
                return;
            }
            NarrowItDownService.getMatchedMenuItems(narrowCtl.searchTerm)
                .then(function(res) {
                    narrowCtl.foundItems = res;
                }).catch(function(error) {console.log("Smth went wrong!", error)});
        };

        narrowCtl.removeItem = function(index) {
            narrowCtl.foundItems.splice(index,1);
        }
    };

    NarrowItDownService.$inject=['$http', 'ApiBasePath'];
    function NarrowItDownService($http, ApiBasePath) {
        var service = this;
        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function(result) {
                var foundItems = result.data.menu_items.filter(function(val) {
                    return val.description.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1;
                });
                return foundItems;
            });
        };
    };
})();
