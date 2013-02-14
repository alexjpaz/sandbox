var rest = angular.module('Services.Rest', []);

rest.factory('Submission', function(){
	var submissions = [];
	
	for(var i=0;i<15;i++) {
		submissions.push({
			tcn: 'TESTSUBMISSION-'+i,
			date: new Date(),
			state: 'SUCCESS'
		});
	}
	
	var Submission = {
		query: function() {
			return submissions;
		}	
	};
	
	return Submission;
});