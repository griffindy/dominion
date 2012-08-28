(function() {

  describe('Workshop', function() {
    beforeEach(function() {
      return this.workshop = new Dominion.Cards.Workshop;
    });
    it('has the right name', function() {
      return expect(this.workshop.get('name')).toEqual('Workshop');
    });
    it('has the right cost', function() {
      return expect(this.workshop.get('cost')).toEqual(3);
    });
    it('has the right description', function() {
      return expect(this.workshop.get('description')).toEqual('Gain a card costing up to $4');
    });
    it('has the right type', function() {
      return expect(this.workshop.get('type')).toEqual('Action');
    });
    return describe('#play', function() {
      beforeEach(function() {
        window.game = new Dominion.Game(2);
        return this.player = window.game.currentPlayer;
      });
      return it('calls the the player to select a card under $4', function() {
        spyOn(this.player, 'selectCardUnder');
        this.workshop.play();
        return expect(this.player.selectCardUnder).toHaveBeenCalledWith(4);
      });
    });
  });

}).call(this);
