(function() {

  describe('Deck', function() {
    describe('#addCard', function() {
      return it('adds a card to the deck', function() {
        var deck;
        deck = new Dominion.Deck;
        deck.addCard(Dominion.Cards.Copper);
        return expect(deck.length).toEqual(11);
      });
    });
    it('defaults to 10 cards in length', function() {
      var deck;
      deck = new Dominion.Deck;
      return expect(deck.length).toEqual(10);
    });
    return it('has a card with a name', function() {
      var deck;
      deck = new Dominion.Deck;
      return expect(deck.at(0).get('name')).toMatch(/Copper|Estate/);
    });
  });

}).call(this);
