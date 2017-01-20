(function(){
    'use strict';
    angular.module('MenuApp')
        .controller('CategoryDetailController', CategoryDetailController);
    CategoryDetailController.$inject = ['$stateParams', 'categoryItems', 'categories'];

    function CategoryDetailController($stateParams, categoryItems, categories){
        var categoryDetailCtrl = this;
        categoryDetailCtrl.categoryItems = categoryItems;
        categoryDetailCtrl.title = categories.find(function(elem, idx, arr){return elem.short_name === $stateParams.shortCategoryName}).name;
//        categoryDetailCtrl.name = categoryItems.find(function(item, idx, arr){return item.short_name===$stateParams.shortCategoryName}).name;
    };
})();
