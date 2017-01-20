(function(){
    'use strict';
    angular.module('MenuApp')
        .controller('MenuAppController', MenuAppController);
    MenuAppController.$inject = ['MenuDataService'];

    function MenuAppController(MenuDataService){
        var menuAppCtrl = this;

    }
        
})();
