(function() {

  describe('Copper', function() {
    beforeEach(function() {
      return this.copper = new Dominion.Cards.Copper;
    });
    it('has a cost of 0', function() {
      return expect(this.copper.get('cost')).toEqual(0);
    });
    it('has a worth of 1', function() {
      return expect(this.copper.get('worth')).toEqual(1);
    });
    return it('has a type of currency', function() {
      return expect(this.copper.get('type')).toEqual('currency');
    });
  });

}).call(this);
