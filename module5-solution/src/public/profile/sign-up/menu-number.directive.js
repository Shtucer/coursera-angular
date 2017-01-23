(function(){
'use strict';
angular.module('public')
.directive('menuNumber', MenuNumberDirective);

// Directive 'menu-number' perform asyncronus validator for Favorite input field in SignUp form

MenuNumberDirective.$inject = ['$q','MenuService'];
function MenuNumberDirective($q, MenuService){
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl){
            
            ctrl.$asyncValidators.menuNumber = function(modelValue, viewValue){
                if(ctrl.$isEmpty(modelValue)){
                    return $q.resolve();
                }
                var def = $q.defer();
                MenuService.getMenuItems().then(function(responce){
                    if(responce.menu_items.find(function(item){
                        return item.short_name.toLowerCase() == viewValue.toLowerCase();
                    })){
                        return def.resolve();
                    } else {
                        return def.reject();
                    }
                });
                return def.promise;
            };
        }
    }
};
})();