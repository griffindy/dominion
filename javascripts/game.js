(function() {

  Dominion.Game = (function() {

    function Game(number_of_players) {
      var i, _i;
      this.players = [];
      for (i = _i = 1; 1 <= number_of_players ? _i <= number_of_players : _i >= number_of_players; i = 1 <= number_of_players ? ++_i : --_i) {
        this.players.push(new Dominion.Player);
      }
    }

    return Game;

  })();

}).call(this);
