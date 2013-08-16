(function() {
	function Bootstrap() {
	    angular.module('Application', ['app']);
	    angular.element(document).ready(function() {
	    	try{
	    		angular.bootstrap(document, [ 'Application' ]);
	    		console.info('Successfully Started');
	    	} catch(e) {
	    		console.error('Exception during bootstrap: ', e.message);
	    		throw e;
	    	}
	    });
	}
	
	function Loader(BootsrapFunc) {
		this.libs = [];
		head.ready(BootsrapFunc);
	}
	
	Loader.prototype.addjs = function(path) {
		this.libs.push("/static/assets/"+path+".js?v=CACHEBUSTER");
	};
	
	Loader.prototype.addcdnjs = function(path) {
		this.libs.push(path);
	};
	
	Loader.prototype.bootstrap = function(f) {
		head.js.apply(this, this.libs);
	}
	
	loader = new Loader(Bootstrap);
	
	loader.addcdnjs('http://code.jquery.com/jquery-2.0.3.min.js');
	loader.addcdnjs('https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js');
	loader.addcdnjs('https://cdnjs.cloudflare.com/ajax/libs/less.js/1.4.1/less.min.js');
	loader.addjs('lib/ckeditor/ckeditor');
	loader.addjs('lib/ckeditor/adapters/jquery');

	loader.addjs('js/app');
	loader.addjs('js/components/layout');
	loader.addjs('js/components/common');
	loader.addjs('js/utils/factory');
	loader.addjs('js/utils/helpers');

	loader.bootstrap();
})();

