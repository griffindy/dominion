(function() {

  describe('SelectView', function() {
    beforeEach(function() {
      var copper, select;
      copper = new Dominion.Cards.Copper;
      select = new Dominion.Models.SelectCard({
        card: copper
      });
      return this.selectView = new Dominion.Views.SelectView({
        model: select
      });
    });
    it('has an el', function() {
      return expect(this.selectView.tagName).toEqual('div');
    });
    it('has the right class name', function() {
      return expect(this.selectView.className).toEqual('select-card');
    });
    return describe('#render', function() {
      return it('has the name of the card', function() {
        return expect(this.selectView.render().$el.text()).toMatch(/.*Copper.*/);
      });
    });
  });

}).call(this);
