(function() {

  describe('Cellar', function() {
    beforeEach(function() {
      this.cellar = new Dominion.Cards.Cellar;
      window.game = new Dominion.Game(2);
      return window.game.turn = new Dominion.Turn;
    });
    it('has a cost of 2', function() {
      return expect(this.cellar.get('cost')).toEqual(2);
    });
    it('is an action', function() {
      return expect(this.cellar.get('type')).toEqual('action');
    });
    it('has the right description', function() {
      return expect(this.cellar.get('description')).toEqual("+1 Action\nDiscard any number of cards.\n+1 Card per card discarded.");
    });
    return describe('#play', function() {
      return it('adds an action', function() {
        expect(window.game.turn.actions).toEqual(1);
        this.cellar.play();
        return expect(window.game.turn.actions).toEqual(2);
      });
    });
  });

}).call(this);
