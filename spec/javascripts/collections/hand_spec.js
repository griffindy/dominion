(function() {

  describe('Hand', function() {
    beforeEach(function() {
      var deck, player;
      deck = new Dominion.Deck;
      player = new Dominion.Player({
        deck: deck
      });
      return this.hand = new Dominion.Collections.Hand({
        player: player
      });
    });
    return it('defaults to five cards', function() {
      return expect(this.hand.length).toEqual(5);
    });
  });

}).call(this);
