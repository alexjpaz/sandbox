function Bootstrap() {
    console.log('Bootstrap Loaded.');
    angular.module('Application', ['TicTacToeGame','Utilities']);
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['Application']);
    });
}

(function() {
	var libs = [];
	function loadjs(path) {
		libs.push("assets/"+path+".js");
	}
	
	function loadextjs(path) {
		libs.push(path);
	}

    loadjs('lib/angular');
    loadjs('lib/log4javascript');
    loadjs('lib/jquery.min'); 
    loadjs('lib/bootstrap.min');
    loadjs('lib/less-1.3.3.min')
    
    loadjs('js/utils');
    loadjs('js/tic-tac-toe');
    
	libs.push(Bootstrap);
	
	head.js.apply(this, libs);    
})();

