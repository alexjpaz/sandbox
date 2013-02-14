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

game.factory('RenderManager', function(util){
    console.log('Render Manager initialized');
    var stage = new createjs.Stage("demoCanvas");
    
    stage = new createjs.Stage("demoCanvas");
    
    //Create a Shape DisplayObject.
    circle = new createjs.Bitmap('http://icons.iconarchive.com/icons/turbomilk/zoom-eyed-creatures-2/128/linux-icon.png')
        //Set position of Shape instance.
    circle.x = circle.y = 50;
    circle.regX = 64;
    circle.regY = 64;
    //Add Shape instance to s
    stage.addChild(circle);
    
    var RenderManager = {};
    
    RenderManager.update = function() {
        circle.rotation += 1;
        stage.update();
    }
    
    return RenderManager;
});

game.factory('World', function(EntityManager, Player){
    
});

game.controller('GameCtrl', function($scope, RenderManager, EntityManager, World){
    
    function tick() {
        RenderManager.update();
    }
    
    function init() {
        setInterval(tick, 10);
    }
    
    init();
});