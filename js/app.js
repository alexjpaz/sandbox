function Bootstrap() {
    console.log('Application Loaded.');
    var app = angular.module('Application', ['Game']);
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['Application']);
    });
}

head.js("js/game.js",Bootstrap);
