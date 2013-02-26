function Bootstrap() {
    console.log('Bootstrap Loaded.');
    angular.module('Application', ['SpaceGame','Utilities']);
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

	loadjs('lib/jquery-1.9.1.min');
    loadjs('lib/angular');
    loadjs('lib/bootstrap.min');
    loadjs('lib/createjs-2013.02.12.min');
    
    loadjs('js/utils');
    
    loadjs('js/spacegame');
    loadjs('js/spacegame-entities');
    
	head.ready(Bootstrap);
	head.js.apply(this, libs);    
})();

