describe 'Copper', ->
  beforeEach( ->
    @copper = new Dominion.Cards.Copper
  )

  it 'has a cost of 0', ->
    expect(@copper.get('cost')).toEqual(0)

  it 'has a worth of 1', ->
    expect(@copper.get('worth')).toEqual(1)

  it 'has a type of currency', ->
    expect(@copper.get('type')).toEqual('currency')
