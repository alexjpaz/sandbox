(function(angular){
	
	depend = [];
	depend.push('components/layout');
	depend.push('utils/helpers');
	depend.push('utils/factory');
	
	var app = angular.module('app', depend);
	
	app.provider('StringUtil', function() {
		function StringUtil() {
			this.toDash = function(string) {
				return string.replace(/([A-Z])/g, function($1){return "-"+$1.toLowerCase();});
			}
			
			this.toCamelCase = function(string) {
				return string.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase() });
			}
		}
		
		
		this.$get = function() {
			return new StringUtil();
		};
	});
	
	app.provider('TemplateUtil', function() {
		function TemplateUtil() {
			this.resolve = function(turl) {
				return '/static/assets/partials/'+turl+'.html';
			}
		}
		
		this.$get = function() {
			return new TemplateUtil();
		}
	});
	

	app.config(function(componentFactoryProvider) {
		ComponentFactory = componentFactoryProvider.$get();
		
		ComponentFactory.build('paz-blog', function($scope) {
		});
		
		
		
	});
	
	app.config(function($compileProvider) {
		$compileProvider.directive('ckeditor', function() {
			return {
				compile: function(element) {
					$(element).ckeditor();
				}
			}
		});
	});
	
})(angular);