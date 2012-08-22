(function() {

  describe('SelectCard', function() {
    return it('has a card associated with it', function() {
      var copper, select_card;
      copper = new Dominion.Cards.Copper;
      select_card = new Dominion.Models.SelectCard({
        card: copper
      });
      return expect(select_card.get('card').get('name')).toEqual('Copper');
    });
  });

}).call(this);
