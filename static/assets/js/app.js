(function(angular){
	
	depend = [];
	depend.push('components/layout');
	depend.push('components/common');
	depend.push('utils/helpers');
	depend.push('utils/factory');
	
	var app = angular.module('app', depend);
	
	app.config(function(RouteBuilderProvider) {
		var RouteBuilder = RouteBuilderProvider.$get();
		
		RouteBuilder.when('/', 'dashboard');
		RouteBuilder.when('/login', 'login');
	});

})(angular);