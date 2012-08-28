(function() {

  describe('Village', function() {
    beforeEach(function() {
      return this.village = new Dominion.Cards.Village;
    });
    it('has the right name', function() {
      return expect(this.village.get('name')).toEqual('Village');
    });
    it('has the right cost', function() {
      return expect(this.village.get('cost')).toEqual(3);
    });
    it('has the right description', function() {
      return expect(this.village.get('description')).toEqual('+1 Card; +2 Actions');
    });
    it('has the right type', function() {
      return expect(this.village.get('type')).toEqual('Action');
    });
    return describe('#play', function() {
      return it('draws 1 card', function() {
        var player;
        player = window.game.currentPlayer;
        spyOn(player, 'drawCard');
        this.village.play();
        return expect(player.drawCard).toHaveBeenCalled;
      });
    });
  });

}).call(this);
