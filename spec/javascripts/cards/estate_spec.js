(function() {

  describe('Estate', function() {
    beforeEach(function() {
      return this.estate = new Dominion.Cards.Estate;
    });
    it('has a cost of 2', function() {
      return expect(this.estate.get('cost')).toEqual(2);
    });
    return it('has a type of victory', function() {
      return expect(this.estate.get('type')).toEqual('victory');
    });
  });

}).call(this);
