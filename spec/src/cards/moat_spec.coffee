describe 'Moat', ->
  beforeEach ->
    @moat = new Dominion.Cards.Moat

  it 'has a cost of 2', ->
    expect(@moat.get('cost')).toEqual 2

  it 'has the right description', ->
    expect(@moat.get('description')).toEqual "+1 Action
      Discard any number of cards.
      +1 Card per card discarded."

  it 'is an action right type', ->
    expect(@moat.get('type')).toEqual 'Action-Reaction'

  describe '#play', ->
   it 'draws two cards', ->
     player = new Dominion.Player
     spyOn player, 'drawCard'
     @moat.play()
     expect(player.drawCard).toHaveBeenCalledWith(2)
