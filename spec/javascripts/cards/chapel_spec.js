(function() {

  describe('Chapel', function() {
    beforeEach(function() {
      var turn;
      window.game = new Dominion.Game(2);
      turn = new Dominion.Turn;
      return this.chapel = new Dominion.Cards.Chapel(turn);
    });
    it('has a cost of 2', function() {
      return expect(this.chapel.get('cost')).toEqual(2);
    });
    it('has the right description', function() {
      return expect(this.chapel.get('description')).toEqual('Trash up to 4 cards from your hand');
    });
    return describe('#play', function() {
      return it('asks the player to choose four cards and the game to trash them', function() {
        var player;
        player = new Dominion.Player;
        spyOn(player, 'chooseCard');
        spyOn(Dominion, 'trash');
        this.chapel.play();
        expect(player.chooseCard).toHaveBeenCalled;
        return expect(Dominion.trash).toHaveBeenCalled;
      });
    });
  });

}).call(this);
