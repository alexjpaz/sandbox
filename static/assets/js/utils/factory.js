(function(angular){
	var factory = angular.module('utils/factory', ['utils/helpers']);
	
	factory.provider('componentFactory', function($compileProvider, StringUtilProvider) {
		var StringUtil = StringUtilProvider.$get();
		
		function ComponentFactory(component_name, controllerFn) {
			
			this.config = {
				templateUrlBase: 'components'
			};
			
			this.build = function(component_name, controllerFn) {
				var componentTemplateUrl =  this.config.templateUrlBase+"/"+component_name;
				
				var componentDirectiveFactory = function(TemplateUtil) {
					var componentDirectiveObj = {
						restrict: 'EA',
						scope: true,
						templateUrl: TemplateUtil.resolve(componentTemplateUrl),
						replace: true,
						controller: controllerFn
					};
					
					return componentDirectiveObj;
				}

				var componentName = StringUtil.toCamelCase(component_name);
				$compileProvider.directive(componentName, componentDirectiveFactory);
			};
		}
		
		this.$get = function() {
			return new ComponentFactory();
		};
	});
})(angular);