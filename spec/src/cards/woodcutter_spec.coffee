describe 'Woodcutter', ->
  beforeEach ->
    @woodcutter = new Dominion.Cards.Woodcutter

  it 'has the right name', ->
    expect(@woodcutter.get('name')).toEqual('Woodcutter')

  it 'has the right cost', ->
    expect(@woodcutter.get('cost')).toEqual(3)

  it 'has the right description', ->
    expect(@woodcutter.get('description')).toEqual('+1 Buy; +$2')

  it 'has the right type', ->
    expect(@woodcutter.get('type')).toEqual('action')

  describe '#play', ->
    beforeEach ->
      window.game = new Dominion.Game(2)
      window.game.turn = new Dominion.Turn

    it 'adds one buy', ->
      expect(window.game.turn.buys).toEqual(1)
      @woodcutter.play()
      expect(window.game.turn.buys).toEqual(2)
