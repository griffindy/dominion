(function() {

  describe('Cellar', function() {
    beforeEach(function() {
      return this.cellar = new Dominion.Cards.Cellar;
    });
    it('has a cost of 2', function() {
      return expect(this.cellar.get('cost')).toEqual(2);
    });
    return it('is an action', function() {
      expect(this.cellar.get('type')).toEqual('action');
      return describe('#play', function() {
        var player;
        it('adds an action', function() {});
        player = new Dominion.Player;
        return spyOn(player.hand);
      });
    });
  });

}).call(this);
