describe 'Turn', ->
  beforeEach ->
    @turn = new Dominion.Turn

  it 'has 1 action by default', ->
    expect(@turn.actions).toEqual(1)

  it 'has 1 buy by default', ->
    expect(@turn.buys).toEqual(1)

  it 'has 0 currency by default', ->
    expect(@turn.currency).toEqual(0)
