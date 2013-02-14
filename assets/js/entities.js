console.log('Loading Entities Module');

angular.module('Entities', []).
    factory('Entity', function(){
        function Entity() {
            console.log('Entity create');
        }
        return Entity;
    }).
    factory('Player', function(Entity){
        function Player() {
            Entity.call(this);
            console.log('Player created');    
        }
        return Player;
    });