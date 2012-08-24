(function() {

  describe('Game', function() {
    return it('creates the right number of users', function() {
      var game;
      game = new Dominion.Game(2);
      return expect(game.players.length).toEqual(2);
    });
  });

}).call(this);
