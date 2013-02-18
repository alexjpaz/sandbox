console.log('Loading Game Module');

var game = angular.module('Game', ['Entities','Utilities']);

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

game.factory('RenderHandler', function(util){
    console.log('Render Manager initialized');
    
    var stage = new createjs.Stage("demoCanvas");
    
    var RenderHandler = {};
    
    RenderHandler.addEntity = function(entity) {
        
        var displayObject = new createjs.Bitmap('http://icons.iconarchive.com/icons/deleket/bioman/128/Bioman-Avatar-2-Green-icon.png');
        
        displayObject.onTick = function(a) {
            angular.forEach(['x','y','rotation'], function(prop) {
                displayObject[prop] = entity[prop];
            });
            
            displayObject.regX = 80;
            displayObject.regY = 64;
        }
        
        stage.addChild(displayObject);
    }
    
    RenderHandler.update = function() {
        stage.update();
    }
    
    return RenderHandler;
});

game.factory('World', function(EntityManager, RenderHandler, CircleMonster) {
    var World = {};
    
    var monster = new CircleMonster();
    
    $(document).on('mousemove', function(evt) {
       monster.x = evt.clientX ;
       monster.y = evt.clientY ;
    });
    
    RenderHandler.addEntity(monster);
            
    World.update = function() {
        RenderHandler.update();
    }
    
    return World;
});

game.controller('GameCtrl', function($scope, World){
    
    function tick() {
        World.update();
    }
    
    function init() {
        setInterval(tick, 10);
    }
    
    init();
});


