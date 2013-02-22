(function(){
	var game = angular.module('DiceGame',['Utilities']);
	
	game.factory('DiceGame', function(GameException) {
		function DiceGame() {
			this.bag = ['%','$','^','A','V'];
			this.board = [];
			
			this.__random = {};
		}
		
		DiceGame.prototype.rollDie = function() {
			if(this.bag == 0) {
				throw new NoDiceLeftException();
			}
			
			this.__random.index = Math.floor(Math.random()*this.bag.length);
			this.__random.die = this.bag.splice(this.__random.index, 1)[0];
			
			this.board.push(this.__random.die);
		}
		
		function NoDiceLeftException() {
			this.message = 'No dice left!';
			GameException.call(this);
		}
		
		return DiceGame;
	});
	
	game.controller('DiceGameCtrl', function($scope, DiceGame){
		$scope.reset = function() {
			$scope.game = new DiceGame();
		}

		$scope.reset();
	});
})();