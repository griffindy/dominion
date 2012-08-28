describe 'Chancellor', ->
  beforeEach ->
    @chancellor = new Dominion.Cards.Chancellor

  it 'has the right name', ->
    expect(@chancellor.get('name')).toEqual('Chancellor')

  it 'has the right cost', ->
    expect(@chancellor.get('cost')).toEqual(3)

  it 'has the right description', ->
    expect(@chancellor.get('description')).toEqual """
      +2$
      You may immediately put your deck in your discard pile
      """

  it 'has the right type', ->
    expect(@chancellor.get('type')).toEqual('Action')

  describe '#play', ->
    beforeEach ->
      window.game = new Dominion.Game(2)
      window.game.turn = new Dominion.Turn

    it "adds two currency to a player's hand", ->
      expect(window.game.turn.currency).toEqual(0)
      @chancellor.play()
      expect(window.game.turn.currency).toEqual(2)

    it 'allows the deck to be reshuffled', ->
      player = window.game.currentPlayer
      spyOn player, 'chancellorShuffle'
      @chancellor.play()
      expect(player.chancellorShuffle).toHaveBeenCalled
