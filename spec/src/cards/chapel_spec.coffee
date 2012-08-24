describe 'Chapel', ->
  beforeEach(-> @chapel = new Dominion.Cards.Chapel)


  it 'has a cost of 2', ->
    expect(@chapel.get('cost')).toEqual 2

  it 'has the right description', ->
    expect(@chapel.get('description')).toEqual 'Trash up to 4 cards from your hand'

  describe '#play', ->
    it 'asks the player to choose four cards and the game to trash them', ->
      player = new Dominion.Player
      spyOn player, 'chooseCard'
      spyOn Dominion, 'trash'
      @chapel.play
      expect(player.chooseCard).toHaveBeenCalled
      expect(Dominion.trash).toHaveBeenCalled
