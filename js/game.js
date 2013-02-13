console.log('Loading Game Module');

var game = angular.module('Game', ['Entities','Utilities']);

game.factory('EntityManager', function(Player, util){
    function EntityManager() {
        this.entities = [];
        
        true.addEntity = function(object, name) {
            if(!name) {
                name = "UnnamedEntity"+util.nonce;
            }
        }
    }
    
    return EntityManager;
});

game.factory('RenderManager', function(util){
    function RenderManager() {
    };
    
    return RenderManager;
});

game.factory('World', function(EntityManager, Player){
    return function() {
        var p = new Player();
        
        EntityManager.addEntity(p, 'Player1');
    };
});

game.controller('GameCtrl', function($scope, EntityManager, World){
    $scope.world = new World;
});