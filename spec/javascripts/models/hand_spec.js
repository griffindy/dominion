(function() {

  describe('Turn', function() {
    it('defaults to one action', function() {
      var turn;
      turn = new Turn;
      return expect(turn.get('actions')).toEqual(1);
    });
    return it('defaults to one buy', function() {
      var turn;
      turn = new Turn;
      return expect(turn.get('buys')).toEqual(1);
    });
  });

}).call(this);
