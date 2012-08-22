describe 'Estate', ->
  beforeEach( -> @estate = new Dominion.Cards.Estate)

  it 'has a cost of 2', ->
    expect(@estate.get('cost')).toEqual(2)

  it 'has a type of victory', ->
    expect(@estate.get('type')).toEqual('victory')
