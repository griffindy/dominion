describe 'Cellar', ->
  beforeEach ->
    @cellar = new Dominion.Cards.Cellar
    window.game = new Dominion.Game(2)
    window.game.turn = new Dominion.Turn

  it 'has a cost of 2', ->
    expect(@cellar.get('cost')).toEqual 2

  it 'is an action', ->
    expect(@cellar.get('type')).toEqual 'action'

  it 'has the right description', ->
    expect(@cellar.get('description')).toEqual """
      +1 Action
      Discard any number of cards.
      +1 Card per card discarded.
    """

  describe '#play', ->
    it 'adds an action', ->
      expect(window.game.turn.actions).toEqual(1)
      @cellar.play()
      expect(window.game.turn.actions).toEqual(2)
