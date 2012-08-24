describe 'Game', ->
  it 'creates the right number of users', ->
    game = new Dominion.Game(2)
    expect(game.players.length).toEqual 2
