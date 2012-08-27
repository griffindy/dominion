(function() {

  describe('Player', function() {
    beforeEach(function() {
      this.player = new Dominion.Player;
      return this.player.set({
        hand: new Dominion.Collections.Hand
      });
    });
    it('initializes with a new deck', function() {
      return expect(this.player.get('deck').length).toEqual(10);
    });
    describe('#drawCard', function() {
      it("adds a card to the player's hand", function() {
        this.player.drawCard();
        return expect(this.player.get('hand').length).toEqual(1);
      });
      return it("can add two cards to the player's hand", function() {
        this.player.drawCard(2);
        return expect(this.player.get('hand').length).toEqual(2);
      });
    });
    describe('#drawNewHand', function() {
      return it("puts five cards in the player's hand", function() {
        this.player.drawNewHand();
        return expect(this.player.get('hand').length).toEqual(5);
      });
    });
    describe('#discardCard', function() {
      return it('puts a card from hand to the deck', function() {
        this.player.set({
          discardPile: new Dominion.Collections.Hand
        });
        this.player.drawNewHand();
        this.player.discardCard();
        expect(this.player.get('hand').length).toEqual(4);
        expect(this.player.get('deck').length).toEqual(5);
        return expect(this.player.get('discardPile').length).toEqual(1);
      });
    });
    return describe('#chooseCard', function() {
      return it('is pending', function() {
        console.log('Player#chooseCard needs to be implemented');
        return pending;
      });
    });
  });

}).call(this);
