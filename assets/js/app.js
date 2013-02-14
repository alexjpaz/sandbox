function Bootstrap() {
    console.log('Bootstrap Loaded.');
    var app = angular.module('Application', ['Game']);
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

    loadextjs('//ajax.googleapis.com/ajax/libs/angularjs/1.0.4/angular.js');
    loadextjs('//cdnjs.cloudflare.com/ajax/libs/log4javascript/1.4.3/log4javascript.js');
    loadextjs("//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"); 
    loadextjs("//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.0/js/bootstrap.min.js");
    loadextjs("http://code.createjs.com/easeljs-0.6.0.min.js");
    
	loadjs("game");
	loadjs("entities");
	loadjs("util");
	libs.push(Bootstrap);
	
	head.js.apply(this, libs);    
})();

