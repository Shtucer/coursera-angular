(function(){
    'use strict';
    angular.module('MenuApp')
        .controller('ItemDetailController', ItemDetailController);
    ItemDetailController.$inject = ['$stateParams', 'categoryItems'];
    
    function ItemDetailController($stateParams, categoryItems){
        var itemDetailCtrl = this;
        var itm = categoryItems[$stateParams.itemId];
        itemDetailCtrl.name = itm.name;
        itemDetailCtrl.description = itm.description;
        itemDetailCtrl.price_small = itm.price_small;
        itemDetailCtrl.price_large = itm.price_large;
        
        
    }
})();
