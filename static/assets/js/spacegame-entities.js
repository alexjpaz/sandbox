(function(){
	var game = angular.module('SpaceGame.Entities',['Utilities']);
	
	game.factory('EntityManager', function(Player, util){
	    function EntityManager() {
	        this.entities = [];
	    }
	    
	    EntityManager.prototype.addEntity = function(object, name) {
	            if(!name) {
	                name = "UnnamedEntity"+util.nonce;
	            }
	            
	        }
	    
	    return EntityManager;
	});
	
	game.factory('Entity', function() {
		function Entity(config) {
			this.x = 0;
			this.y = 0;
		}
		
		return Entity;
	});
	
	game.factory('DisplayEntity', function() {
		function DisplayEntity(config) {
			this.displayObject = {};
		}
		
		return DisplayEntity;
	});
	
	game.factory('Actor', function() {
		function Actor(config) {
			this.skin = {};
			this.body = {};
		}
		
		return Actor;
	});
	
	game.factory('Player', function(Actor) {
		
		function Player(config) {
			Actor.call(this);
			
			this.skin = new createjs.Shape();
			this.skin.graphics.beginFill("red").drawCircle(200,200,20);
		}
		
		return Player;
	});
})();