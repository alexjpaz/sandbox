(function() {
	function Loader() {
		this.js = [];
		this.boot = {};
	}
	
	Loader.prototype.addJs = function(url, module) {
		
		if(!module) {
			module = 'js';
		}
		
		this.js.push(url);
	};
	
	Loader.prototype.ready = function(bootfn) {
		head.ready(bootfn);
	};
	
	Loader.prototype.init = function() {
		head.js.apply(this, this.js);
	};
	
	var loader = new Loader();
	
	loader.addJs("//ajax.googleapis.com/ajax/libs/angularjs/1.0.4/angular.min.js");
	loader.addJs("//cdnjs.cloudflare.com/ajax/libs/less.js/1.3.3/less.min.js");
	
	loader.addJs("assets/js/app.js");
	loader.addJs("assets/js/rest.js");
	loader.addJs("assets/js/config.js");
	loader.addJs("assets/js/controllers.js");
	
	loader.ready(function() {
		angular.bootstrap(document, ['Application']);
	});
	
	loader.init();
})();
