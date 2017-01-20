(function(){
    'use strict';
    angular.module('MenuApp')
        .component("listCategories",{
            templateUrl: "templates/categorieslist.html",
            bindings: {
                categories: '<'
            }
        });
})();
