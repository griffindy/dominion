describe 'SelectCard', ->
  it 'has a card associated with it', ->
    copper = new Dominion.Cards.Copper
    select_card = new Dominion.Models.SelectCard({card: copper})
    expect(select_card.get('card').get('name')).toEqual 'Copper'
