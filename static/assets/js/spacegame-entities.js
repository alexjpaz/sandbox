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
	
	game.factory('Player', function(DisplayEntity) {
		
		function Player(config) {
			
			DisplayEntity.call(this);
			
			
			this.displayObject = new createjs.Shape();
			this.displayObject.graphics.beginFill("red").drawCircle(200,200,20);
	        
			this.displayObject.onTick = function(c) {
				console.log(this)
	        	this.x += 0.2;
	        }
		}
		
		return Player;
	});
	
	game.factory('Missle', function(DisplayEntity) {
		
		function Missle(config) {
			
			DisplayEntity.call(this);
			
			var _displayObject = {};
			
			this.displayObject = new createjs.Shape();
			this.displayObject.graphics.beginFill("blue").drawCircle(200,200,5);
			
			var o = this;
			this.displayObject.onTick = function(c) {
	        	this.x += 1;
	        }
	        
		}
		
		return Missle;
	});
	
})();