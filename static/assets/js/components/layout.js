(function(angular){
	var layout = angular.module('components/layout', ['utils/factory']);
	
	layout.config(function(componentFactoryProvider) {
		ComponentFactory = componentFactoryProvider.$get();
		
		ComponentFactory.build('paz-blog', function($scope) {
		});
		
		ComponentFactory.build('navbar', function($scope) {
			
		});
	});
	
	layout.config(function(componentFactoryProvider) {
		ComponentFactory = componentFactoryProvider.$get();
		ComponentFactory.config.templateUrlBase = 'components/login';
		
		ComponentFactory.build('login', function($scope) {
			$scope.login = {
				user: 'useruser',
				password: 'password',
			}
		});
	});

	
})(angular);