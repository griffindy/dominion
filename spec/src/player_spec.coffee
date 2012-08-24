describe 'Player', ->
  beforeEach ->
    @player = new Dominion.Player

  describe '#drawNewHand', ->
    it "puts five cards in the player's hand", ->
      @player.drawNewHand
      expect(@player.get('hand').length).toEqual 5

  describe '#drawCard', ->
    it "adds a card to the player's hand", ->
      @player.set({ hand: new Dominion.Collections.Hand })
      @player.drawCard
      expect(@player.get('hand').length()).toEqual 1
