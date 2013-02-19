console.log('Loading Entities Module');

angular.module('Entities', []).
    factory('Entity', function(){
        function Entity() {
            console.log('Entity create');
        }
        return Entity;
    }).
    factory('CircleMonster', function(Entity) {
        function CircleMonster() {
            Entity.call(this);
            this.x = 100;
            this.y = 100;
            this.rotation = 0;
            this.radius = 40;
            
        }
        
        return CircleMonster;
    }).
    factory('Player', function(Entity){
        function Player() {
            Entity.call(this);
            

        }
        return Player;
    });