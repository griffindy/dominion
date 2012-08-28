describe 'Village', ->
  beforeEach ->
    @village = new Dominion.Cards.Village

  it 'has the right name', ->
    expect(@village.get('name')).toEqual('Village')

  it 'has the right cost', ->
    expect(@village.get('cost')).toEqual(3)

  it 'has the right description', ->
    expect(@village.get('description')).toEqual('+1 Card; +2 Actions')

  it 'has the right type', ->
    expect(@village.get('type')).toEqual('Action')

  describe '#play', ->
    it 'draws 1 card', ->
      player = window.game.currentPlayer
      spyOn player, 'drawCard'
      @village.play()
      expect(player.drawCard).toHaveBeenCalled
