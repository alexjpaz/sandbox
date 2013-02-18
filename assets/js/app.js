function Bootstrap() {
    console.log('Bootstrap Loaded.');
    var app = angular.module('Application', ['TicTacToeGame']);
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['Application']);
    });
}

(function() {
	var libs = [];
	function loadjs(path) {
		libs.push("assets/js/"+path+".js");
	}
	
	function loadextjs(path) {
		libs.push(path);
	}

    loadextjs('/assets/lib/angular.js');
    loadextjs('/assets/lib/log4javascript.js');
    loadextjs("/assets/lib/jquery.min.js"); 
    loadextjs("/assets/lib/bootstrap.min.js");
    loadextjs("/assets/lib/easeljs-0.6.0.min.js");
    
    loadextjs('/games/tic-tac-toe/tic-tac-toe.js');
    
    
	loadjs("game");
	loadjs("entities");
	loadjs("util");
	libs.push(Bootstrap);
	
	head.js.apply(this, libs);    
})();

