describe 'Turn', ->
  it 'defaults to one action', ->
    turn = new Turn
    expect(turn.get('actions')).toEqual(1)

  it 'defaults to one buy', ->
    turn = new Turn
    expect(turn.get('buys')).toEqual(1)
