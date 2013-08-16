(function(angular){
	var layout = angular.module('components/layout', ['utils/factory']);
	
	layout.config(function(componentFactoryProvider) {
		ComponentFactory = componentFactoryProvider.$get();
		
		ComponentFactory.build('paz-blog', function($scope) {
		});
		
	});
	
	
})(angular);