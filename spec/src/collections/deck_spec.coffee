describe 'Deck', ->
  describe '#addCard', ->
    it 'adds a card to the deck', ->
      deck = new Dominion.Deck
      deck.addCard(Dominion.Cards.Copper)
      expect(deck.length).toEqual(11)

  it 'defaults to 10 cards in length', ->
    deck = new Dominion.Deck
    expect(deck.length).toEqual(10)

  it 'has a card with a name', ->
    deck = new Dominion.Deck
    expect(deck.at(0).get('name')).toMatch(/Copper|Estate/)
