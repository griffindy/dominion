(function() {

  describe('Player', function() {
    beforeEach(function() {
      return this.player = new Dominion.Player;
    });
    describe('#drawNewHand', function() {
      return it("puts five cards in the player's hand", function() {
        this.player.drawNewHand;
        return expect(this.player.get('hand').length).toEqual(5);
      });
    });
    return describe('#drawCard', function() {
      return it("adds a card to the player's hand", function() {
        this.player.set({
          hand: new Dominion.Collections.Hand
        });
        this.player.drawCard;
        return expect(this.player.get('hand').length()).toEqual(1);
      });
    });
  });

}).call(this);
