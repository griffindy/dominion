(function() {

  describe('Game', function() {
    beforeEach(function() {
      return this.game = new Dominion.Game(2);
    });
    it('creates the right number of users', function() {
      return expect(this.game.players.length).toEqual(2);
    });
    return describe('#nextPlayer', function() {
      return it('moves to the next player', function() {
        expect(this.game.currentPlayer).toEqual(this.game.players[0]);
        this.game.nextPlayer();
        return expect(this.game.currentPlayer).toEqual(this.game.players[1]);
      });
    });
  });

}).call(this);
