describe 'Hand', ->
  beforeEach ->
    deck = new Dominion.Deck
    player = new Dominion.Player({ deck: deck })
    @hand = new Dominion.Collections.Hand({ player: player })

  it 'defaults to five cards', ->
    expect(@hand.length).toEqual 5
