describe 'Game', ->
  beforeEach ->
    @game = new Dominion.Game(2)

  it 'creates the right number of users', ->
    expect(@game.players.length).toEqual(2)

  describe '#nextPlayer', ->
    it 'moves to the next player', ->
      expect(@game.currentPlayer).toEqual(@game.players[0])
      @game.nextPlayer()
      expect(@game.currentPlayer).toEqual(@game.players[1])
