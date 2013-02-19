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
})(angular);