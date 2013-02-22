(function(){
	var game = angular.module('DiceGame',['Utilities']);
	
	game.factory('DiceGame', function(DiceSet, GameException) {
		function DiceGame() {
			this.bag = new DiceSet();
			this.board = [];

		}
		
		DiceGame.prototype.rollDie = function() {
			console.log(Math.random().toString(36).substring(7));
			if(this.bag.size() == 0) {
				throw new NoDiceLeftException();
			}
		
			this.board.push(this.bag.pick());
		}
		
		function NoDiceLeftException() {
			this.message = 'No dice left!';
			GameException.call(this);
		}
		
		return DiceGame;
	});
	
	game.factory('DiceSet', function() {
		function DiceSet() {
			this._set = this.generateSet(10);
			this.__random = {};
		}
		
		DiceSet.prototype.pick = function() {
			this.__random.index = Math.floor(Math.random()*this._set.length);
			this.__random.die = this._set.splice(this.__random.index, 1)[0];
			
			return this.__random.die;
		}
		
		DiceSet.prototype.generateSet = function(amount) {
			var text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()_+-=[]{}\'"\\;:<>,./?';
			var set = [];
			
			for(var i=0;i<amount;i++) {
				set.push(text.charAt(Math.floor(Math.random() * text.length)));
			}
			
			return set;
		}
		
		DiceSet.prototype.size = function() {
			return this._set.length;
		}
		
		return DiceSet;
	});
	
	game.controller('DiceGameCtrl', function($scope, DiceGame){
		$scope.reset = function() {
			$scope.game = new DiceGame();
		}

		$scope.reset();
	});
})();