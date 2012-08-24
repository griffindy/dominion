describe 'SelectView', ->
  beforeEach ->
    copper = new Dominion.Cards.Copper
    select = new Dominion.Models.SelectCard({ card: copper })
    @selectView = new Dominion.Views.SelectView({ model: select })

  it 'has an el', ->
    expect(@selectView.tagName).toEqual 'div'

  it 'has the right class name', ->
    expect(@selectView.className).toEqual 'select-card'

  describe '#render', ->
    it 'has the name of the card', ->
      expect(@selectView.render().$el.text()).toMatch /.*Copper.*/
