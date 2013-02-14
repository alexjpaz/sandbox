(function(){
	var mod = angular.module('Controllers', []);

	mod.controller('SubmissionListCtrl', function($scope, Submission) {
		$scope.submissions = Submission.query();
	});
	
	mod.controller('LayoutSidebarCtrl', function($scope, Config) {
		$scope.sidebar = Config.menu;
	});
})();
