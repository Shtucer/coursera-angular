(function(){
    'use strict';
    angular.module('ShoppingListCheckOff', [])
        .controller('toBuyCtl', ToBuyController)
        .controller('alreadyBoughtCtl', AlreadyBoughtController)
        .service('ShoppingList', ShoppingListService)
    
    ToBuyController.$inject = ['ShoppingList'];
    function ToBuyController(ShoppingList) {
        var listToBuy = this;
        listToBuy.items = ShoppingList.getToBuyList();
        listToBuy.buyItem = function(idx) {
            ShoppingList.buyItem(idx);
        }
        
    }
    
    AlreadyBoughtController.$inject = ['ShoppingList'];
    function AlreadyBoughtController(ShoppingList) {
        var listBought = this;
        listBought.items = ShoppingList.getBoughtList();
        
    }

    function ShoppingListService(){
        var service = this;
        var toBuyList = [
            {
                name: "Snacks",
                quantity: 10
            },
            {
                name: "Beer",
                quantity: 20
            },
            {
                name: "Bread",
                quantity: 1
            },
            {
                name: "Sweater",
                quantity: 1
            },
            {
                name: "Shoes",
                quantity: 2
            }
        ];
        var boughtList = [];

        service.buyItem = function(idx) {
            var item = toBuyList[idx];
            boughtList.push(item);
            toBuyList.splice(idx, 1);
        }

        service.getToBuyList = function() {
            return toBuyList;
        }

        service.getBoughtList = function() {
            return boughtList;
        }

    }

})();
