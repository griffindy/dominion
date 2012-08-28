(function() {

  describe('Turn', function() {
    beforeEach(function() {
      return this.turn = new Dominion.Turn;
    });
    it('has 1 action by default', function() {
      return expect(this.turn.actions).toEqual(1);
    });
    it('has 1 buy by default', function() {
      return expect(this.turn.buys).toEqual(1);
    });
    return it('has 0 currency by default', function() {
      return expect(this.turn.currency).toEqual(0);
    });
  });

}).call(this);
