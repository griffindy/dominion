describe 'Moat', ->
  beforeEach ->
    window.game = new Dominion.Game(2)
    @moat = new Dominion.Cards.Moat

  it 'has a cost of 2', ->
    expect(@moat.get('cost')).toEqual 2

  it 'has the right description', ->
    expect(@moat.get('description')).toEqual "+2 Cards
      When another player playts an Attack card, you may reveal this from your hand. If you do, you are unaffected by that Attack."

  it 'is an action right type', ->
    expect(@moat.get('type')).toEqual 'Action-Reaction'

  describe '#play', ->
   it 'draws two cards', ->
     player = window.game.currentPlayer
     spyOn player, 'drawCard'
     @moat.play()
     expect(player.drawCard).toHaveBeenCalledWith(2)
