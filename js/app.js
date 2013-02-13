function Bootstrap() {
    console.log('Bootstrap Loaded.');
    var app = angular.module('Application', ['Game']);
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['Application']);
    });
}

head.js("js/game.js","js/entities.js","js/util.js",Bootstrap);
