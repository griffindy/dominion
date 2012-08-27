(function() {

  describe('Moat', function() {
    beforeEach(function() {
      window.game = new Dominion.Game(2);
      return this.moat = new Dominion.Cards.Moat;
    });
    it('has a cost of 2', function() {
      return expect(this.moat.get('cost')).toEqual(2);
    });
    it('has the right description', function() {
      return expect(this.moat.get('description')).toEqual("+2 Cards      When another player playts an Attack card, you may reveal this from your hand. If you do, you are unaffected by that Attack.");
    });
    it('is an action right type', function() {
      return expect(this.moat.get('type')).toEqual('Action-Reaction');
    });
    return describe('#play', function() {
      return it('draws two cards', function() {
        var player;
        player = window.game.currentPlayer;
        spyOn(player, 'drawCard');
        this.moat.play();
        return expect(player.drawCard).toHaveBeenCalledWith(2);
      });
    });
  });

}).call(this);
