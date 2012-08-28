describe 'Player', ->
  beforeEach ->
    @player = new Dominion.Player

  it 'initializes with a new deck', ->
    expect(@player.get('deck').length).toEqual(10)

  describe '#drawCard', ->
    it "adds a card to the player's hand", ->
      @player.drawCard()
      expect(@player.get('hand').length).toEqual(1)

    it "can add two cards to the player's hand", ->
      @player.drawCard(2)
      expect(@player.get('hand').length).toEqual(2)

  describe '#drawNewHand', ->
    it "puts five cards in the player's hand", ->
      @player.drawNewHand()
      expect(@player.get('hand').length).toEqual(5)

  describe '#discardCard', ->
    it 'puts a card from hand to the deck', ->
      @player.set({ discardPile: new Dominion.Collections.Hand })
      @player.drawNewHand()
      @player.discardCard()
      expect(@player.get('hand').length).toEqual(4)
      expect(@player.get('deck').length).toEqual(5)
      expect(@player.get('discardPile').length).toEqual(1)

  describe '#chooseCard', ->
    it 'is pending', ->
      console.log 'Player#chooseCard needs to be implemented'
      pending
