describe 'Workshop', ->
  beforeEach ->
    @workshop = new Dominion.Cards.Workshop

  it 'has the right name', ->
    expect(@workshop.get('name')).toEqual('Workshop')

  it 'has the right cost', ->
    expect(@workshop.get('cost')).toEqual(3)

  it 'has the right description', ->
    expect(@workshop.get('description')).toEqual('Gain a card costing up to $4')

  it 'has the right type', ->
    expect(@workshop.get('type')).toEqual('Action')

  describe '#play', ->
    beforeEach ->
      window.game = new Dominion.Game(2)
      @player = window.game.currentPlayer

    it 'calls the the player to select a card under $4', ->
      spyOn @player, 'selectCardUnder'
      @workshop.play()
      expect(@player.selectCardUnder).toHaveBeenCalledWith(4)
