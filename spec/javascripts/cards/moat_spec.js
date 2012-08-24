(function() {

  describe('Moat', function() {
    beforeEach(function() {
      return this.moat = new Dominion.Cards.Moat;
    });
    it('has a cost of 2', function() {
      return expect(this.moat.get('cost')).toEqual(2);
    });
    it('has the right description', function() {
      return expect(this.moat.get('description')).toEqual("+1 Action      Discard any number of cards.      +1 Card per card discarded.");
    });
    it('is an action right type', function() {
      return expect(this.moat.get('type')).toEqual('Action-Reaction');
    });
    return describe('#play', function() {
      return it('draws two cards', function() {
        var player;
        player = new Dominion.Player;
        spyOn(player, 'drawCard');
        this.moat.play();
        return expect(player.drawCard).toHaveBeenCalledWith(2);
      });
    });
  });

}).call(this);
