function Bootstrap() {
    console.log('Bootstrap Loaded.');
    angular.module('Application', ['DiceGame','Utilities']);
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
    
    loadjs('js/utils');
    loadjs('js/dicegame');
    
	head.ready(Bootstrap);
	head.js.apply(this, libs);    
})();

