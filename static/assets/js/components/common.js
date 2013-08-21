(function(angular){
	var common = angular.module('components/common', ['utils/factory']);
	
	common.config(function(componentFactoryProvider) {
		var ComponentFactory = componentFactoryProvider.$get();
		
		ComponentFactory.build('post-editor', function($scope, $http) {
			$http.get('/page/new-test-file.html').success(function(data) {
				$scope.html = data.html;
			});
				
			$scope.update = function() {
				$http.post('/page/new-test-file.html', {
					content: $scope.html
				});
				//$http.post('/post/1234');
			};
		});
	});
	
	common.config(function($compileProvider) {
		$compileProvider.directive('ckeditor', function() {
			return {
				compile: function(element) {
					$(element).ckeditor();
				}
			}
		});
	});
})(angular);