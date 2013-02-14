var app = angular.module('Application', ['Controllers','Services.Rest','Config']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/:resource', {redirectTo: '/:resource/home'});
	$routeProvider.when('/:resource/:subresource');
});

app.controller('AppCtrl', function($scope){
	$scope.classess = {};
	$scope.classess.body = 'full';
});



app.controller('RouteViewCtrl', function($route, $scope){
	$route.reload();
	$scope.$on('$routeChangeSuccess', function(event, current) {
		$scope.TEMPLATEURL="assets/partials/"+current.params.resource+"/"+current.params.subresource+".html";
		console.log(current);
	});
});


app.controller('LayoutCtrl', function($scope){
	$scope.classes = {};
	$scope.classes.body = "span10";
	$scope.classes.sidebar = "span2";
	
	$scope.showSidebar = true;
	
	$scope.toggle = function() {
		$scope.showSidebar = !$scope.showSidebar;
		
		if($scope.showSidebar) {
			$scope.classes.body = "span12 no-sidebar";
			$scope.classes.sidebar = "hide";
		} else {
			$scope.classes.body = "span10";
			$scope.classes.sidebar = "span2";
		}
	};
});

app.service('util', function() {
	util = {};
	
	util.template = function(path) {
		return '/assets/partials/'+path+'.html';
	};
	
	return util;
});

app.directive('template', function($window, util){
	return {
		template: "<ng-include src='template'></ng-include>",
		replace: true,
		scope: true,
		link: function(scope, element, attrs) {
			scope.template = util.template(attrs.template);
		}
	};
});

