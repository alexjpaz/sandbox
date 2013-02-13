console.log('Loading Utilities Module');

angular.module('Utilities', []).
    factory('util', function(){
    return {
        nonce: function nonce() {
            new Date().getTime();
        }
    };
});