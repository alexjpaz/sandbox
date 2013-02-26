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
			
			var _displayObject = {};
			
			_displayObject = new createjs.Shape();
			_displayObject.graphics.beginFill("red").drawCircle(200,200,20);
	        
	        _displayObject.onTick = function(c) {
	        	this.x += 0.2;
	        }
	        
	        this.displayObject = _displayObject;
		}
		
		return Player;
	});
	
	game.factory('Missle', function(DisplayEntity) {
		
		function Missle(config) {
			
			DisplayEntity.call(this);
			
			var _displayObject = {};
			
			_displayObject = new createjs.Shape();
			_displayObject.graphics.beginFill("blue").drawCircle(0,0,10);
	        
	        _displayObject.onTick = function() {
	        	_displayObject.x += 5;
	        }
	        
	        this.displayObject = _displayObject;
		}
		
		return Missle;
	});
	
})();