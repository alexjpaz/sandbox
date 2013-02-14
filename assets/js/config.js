(function(){
	var config = angular.module('Config', []);
	
	var Config = {};
	
	Config.menu = {
		"Home" : {},
		"About" : {},
		"Main" : {
			"Submissions" : "/submission"
		},
		"Configuration" : {
			"User" : "/user"
		}
	};
	
	
	config.factory('Config', function() {
		return Config;
	});
	
})();