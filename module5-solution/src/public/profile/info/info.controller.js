(function(){
    'use strict';
    angular.module('public')
    .controller('InfoController',['ProfileService', function(ProfileService){
        var infoCtrl = this;
        infoCtrl.isExists = function(){
            return ProfileService.isSaved();
        };
        infoCtrl.profile = ProfileService.getProfile();
    }]);
})();