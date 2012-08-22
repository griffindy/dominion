describe 'Cellar', ->
  beforeEach(-> @cellar = new Dominion.Cards.Cellar)

  it 'has a cost of 2', ->
    expect(@cellar.get('cost')).toEqual 2

  it 'is an action', ->
    expect(@cellar.get('type')).toEqual 'action'

    describe '#play', ->
      it 'adds an action', ->
      player = new Dominion.Player
      spyOn player.hand
