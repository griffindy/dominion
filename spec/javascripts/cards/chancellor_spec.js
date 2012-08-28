(function() {

  describe('Chancellor', function() {
    beforeEach(function() {
      return this.chancellor = new Dominion.Cards.Chancellor;
    });
    it('has the right cost', function() {
      return expect(this.chancellor.get('cost')).toEqual(3);
    });
    it('has the right description', function() {
      return expect(this.chancellor.get('description')).toEqual("+2$\nYou may immediately put your deck in your discard pile");
    });
    it('has the right type', function() {
      return expect(this.chancellor.get('type')).toEqual('Action');
    });
    return describe('#play', function() {
      beforeEach(function() {
        window.game = new Dominion.Game(2);
        return window.game.turn = new Dominion.Turn;
      });
      it("adds two currency to a player's hand", function() {
        expect(window.game.turn.currency).toEqual(0);
        this.chancellor.play();
        return expect(window.game.turn.currency).toEqual(2);
      });
      return it('allows the deck to be reshuffled', function() {});
    });
  });

}).call(this);
