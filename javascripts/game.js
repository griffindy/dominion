(function() {

  Dominion.Game = (function() {

    function Game(number_of_players) {
      var i, _i;
      this.players = [];
      for (i = _i = 1; 1 <= number_of_players ? _i <= number_of_players : _i >= number_of_players; i = 1 <= number_of_players ? ++_i : --_i) {
        this.players.push(new Dominion.Player);
      }
      this.currentPlayerPosition = 0;
      this.currentPlayer = this.players[this.currentPlayerPosition];
    }

    Game.prototype.nextPlayer = function() {
      var numberOfPlayers;
      numberOfPlayers = this.players.length;
      if (this.currentPlayer === numberOfPlayers) {
        this.currentPlayerPosition = 0;
        return this.currentPlayer = this.players[this.currentPlayerPosition];
      } else {
        return this.currentPlayer = this.players[this.currentPlayerPosition + 1];
      }
    };

    return Game;

  })();

}).call(this);
