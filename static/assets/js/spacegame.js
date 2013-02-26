(function(){
	var game = angular.module('SpaceGame',['SpaceGame.Entities', 'Utilities']);
	
	game.factory('SpaceGame', function(RenderHandler, GameException, Player, Missle) {
		function SpaceGame(config) {
			
			var p = new Player();
			
			
			RenderHandler.addEntity(p, {
				name: 'Player'
			});
			setInterval(RenderHandler.update, 100);
		}
		
		SpaceGame.prototype.fire = function() {
			console.log('fire missle');
			
			var p = RenderHandler.getEntityByname('Player');
			console.log(p)
			var m = new Missle();
			m.displayObject.x = 200;
			m.y = 200;
			
			RenderHandler.addEntity(m);
		};
		
		return SpaceGame;
	});
	
	game.factory('RenderHandler', function(DisplayEntity, GameException){
	    console.log('Render Manager initialized');
	    
	    var stage = new createjs.Stage("game");
	    var entities = {};
	    
	    var RenderHandler = {};
	    
	    RenderHandler.addEntity = function(entity, config) {
	        
	    	if(!entity.displayObject) {
	    		throw new InvalidEntityException(entity);
	    		return;
	    	}
	    	
	    	if(!config) {
	    		config = {};
	    	}
	    	
	    	if(!config.name) {
	    		config.name = 'UnnamedEntity'+(new Date().getTime());
	    	}
	    	
	    	entities[config.name] = entity;
	        stage.addChild(entity.displayObject);
	    }
	    
	    RenderHandler.getEntityByname = function(entityName) {
	    	console.log(entities)
	    	return entities[entityName];
	    }
	    
	    RenderHandler.update = function() {
	        stage.update();
	    }
	    
	    function InvalidEntityException(arguments) {
	    	this.message = "Invalid entity. Cannot render.";
	    	this.args = 
	    	GameException.call(this);
	    }
	    
	    return RenderHandler;
	});
	
	game.controller('SpaceGameCtrl', function($scope, SpaceGame){
		
		$scope.settings = {
		};
		
		
		$scope.reset = function() {
			$scope.game = new SpaceGame($scope.settings);
		};
		
		$scope.reset();
		
		$scope.$on('GameSettingsUpdated', function(event, settings){
			$scope.settings = settings;
		});
	});
	
	game.controller('DiceGameSettingsCtrl', function($scope) {
		
		$scope.new_settings = angular.copy($scope.settings);
		
		$scope.saveChanges = function() {
			$scope.$emit('GameSettingsUpdated', angular.copy($scope.new_settings));
		};
	});
	
})();