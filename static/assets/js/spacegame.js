(function(){
	var game = angular.module('SpaceGame',['SpaceGame.Entities', 'Utilities']);
	
	game.factory('SpaceGame', function(EntityManager, RenderHandler, GameException, Player) {
		function SpaceGame(config) {
			
			var p = new Player();
			
			EntityManager.addEntity(p, {
				name: 'Player'
			})
			
			setInterval(RenderHandler.update, 100);
		}
		
		return SpaceGame;
	});
	
	game.factory('InputListener', function(EntityManager) {
		console.log('InputHanlder initialized.');
		
		var player = EntityManager.getPlayer();
		
		
		console.log(player);
		
		$(document).on('mousemove', function() {
		});
		
		var InputHandler = {};
		
		return InputHandler;
	});
	
	game.factory('EntityManager', function(RenderHandler) {
		console.log('EntityManager initialized.');

		var entities = {};		
		
		var EntityManager = {};
		
		EntityManager.getPlayer = function() {
			return EntityManager.getEntityById['Player'];
		}
		
		EntityManager.addEntityDef = function(entityDef) {
			
		}
		
		EntityManager.addEntity = function(entity, config) {
			entities[config.name] = entity;
			RenderHandler.addEntity(entity, config);
		}
		
		return EntityManager;
	});
	
	game.factory('RenderHandler', function(DisplayEntity, GameException){
	    console.log('Render Manager initialized');
	    
	    var stage = new createjs.Stage("game");
	    var entities = {};
	    
	    var RenderHandler = {};
	    
	    RenderHandler.addEntity = function(entity, config) {
	        
	    	if(!entity.skin) {
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
	        stage.addChild(entity.skin);
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