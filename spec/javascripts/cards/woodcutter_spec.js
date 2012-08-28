(function() {

  describe('Woodcutter', function() {
    beforeEach(function() {
      return this.woodcutter = new Dominion.Cards.Woodcutter;
    });
    it('has the right name', function() {
      return expect(this.woodcutter.get('name')).toEqual('Woodcutter');
    });
    it('has the right cost', function() {
      return expect(this.woodcutter.get('cost')).toEqual(3);
    });
    it('has the right description', function() {
      return expect(this.woodcutter.get('description')).toEqual('+1 Buy; +$2');
    });
    it('has the right type', function() {
      return expect(this.woodcutter.get('type')).toEqual('action');
    });
    return describe('#play', function() {
      beforeEach(function() {
        window.game = new Dominion.Game(2);
        return window.game.turn = new Dominion.Turn;
      });
      return it('adds one buy', function() {
        expect(window.game.turn.buys).toEqual(1);
        this.woodcutter.play();
        return expect(window.game.turn.buys).toEqual(2);
      });
    });
  });

}).call(this);
