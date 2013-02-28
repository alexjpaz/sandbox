(function() {
	var game = angular.module('TicTacToeGame', ['Utilities', 'ngResource']);
	
	game.factory('GameException', function($log, $rootScope) {
		return function() {
			$rootScope.$broadcast('GameExceptionError',this);
		};
	});
	
	game.factory('TicTacToeGameSession', function(TicTacToeBoard, GameException) {
		function TicTacToeGameSession() {
			this.board = new TicTacToeBoard();
		}
		
		TicTacToeGameSession.prototype.updateSession = function() {
			// Update and sync game session
		};
		
		return TicTacToeGameSession;
	});
	
	game.factory('TicTacToeBoard', function(GameException) {
		
		function TicTacToeBoard() {
			this.squares = [];
			this.winner;
			
			for(var i=0;i<9;i++) {
				this.squares.push('');
			}
			
			this._mark = 'X';
            this._moves = 0;
		}
		
		TicTacToeBoard.prototype.putMark = function(pos) {
			if(this._moves > 9) {
                //No moves left;
                return;
			}
            
            if(this.winner) {
                return;
            }
            
            
			if(this.squares[pos] != '') {
				throw new this.InvalidMoveException(pos);
			}
			
			this.squares[pos] = this._mark;
            this._moves++;
            this.checkGameState();
            this._swapMark();
		};
		
		TicTacToeBoard.prototype._swapMark = function() {
			if(this._mark == 'X') {
				this._mark = 'O';
			} else {
				this._mark = 'X';
			}
		};
		
		TicTacToeBoard.prototype.setWinner =function(mark, squares) {
			this.winner = {
				mark: mark,
				squares: squares
			};
		};
		
		TicTacToeBoard.prototype.checkGameState = function() {
			var i = 0,j = 1,mark=0;
			var marks = {X:0, O:0};
			
			var wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
			
			for(i in wins) {
				for(j in wins[i]) {
					mark = this.squares[wins[i][j]];
					if(mark == 'X') {
						marks.X++;
					} else if(mark == 'O'){
						marks.O++;
					}
				}
				console.log(this._moves)
				if(marks.X == 3) {
					this.setWinner('X',wins[i]);
				} else if (marks.O == 3) {
					this.setWinner('O',wins[i]);
				} else if (this._moves > 8) {
    			    this.setWinner('Cat');
				}
	
				marks = {X:0,O:0};
			}
		};
		
		TicTacToeBoard.prototype.InvalidMoveException = function(position) {
			this.message = "Cannot place mark at position " + position;
			GameException.call(this);
		};
		
		return TicTacToeBoard;
	});
	
	game.controller('TicTacToeGameCtrl', function($scope, TicTacToeBoard, TicTacToePersistance) {
		
		$scope.reset = function() {
			$scope.board = new TicTacToeBoard();
			$scope.boardOverlay = {};
		};
		
		$scope.$on('GameExceptionError', function(event, exception) {
			$scope.exception = exception; 
		});
		
		$scope.$watch('board.winner', function(winner) {
			if(winner) {
				for(j in winner.squares) {
					$scope.boardOverlay[winner.squares[j]] = true;
				}
			} 
		});
		
		$scope.save = function() {
			TicTacToePersistance.save($scope.board);
		};
		
		$scope.reset();
	});
	
	game.factory('TicTacToePersistance', function($resource) {
		return $resource('/game/:gameId');
	});
	
})();