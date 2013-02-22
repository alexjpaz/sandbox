(function(angular) {
    var utils = angular.module('Utilities',[]);
    
    utils.directive('template', function(){
        return {
            template: "<ng-include src='templateUrl'></ng-include>",
            scope: true,
            replace: true,
            controller: function($scope, $attrs) {
                $scope.templateUrl = "/assets/partials/"+$attrs.template;
            }
        }
    });
    
    utils.factory('GameException', function($rootScope){
    	return function(cause){
    		console.log(cause);
    		$rootScope.$broadcast('GameExceptionError', cause);
    	};
    });
    
})(angular);