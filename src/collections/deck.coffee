class Dominion.Deck extends Backbone.Collection
  initialize: ->
    @addCard(Dominion.Cards.Copper) for i in [1..7]
    @addCard(Dominion.Cards.Estate) for i in [1..3]

  addCard: (klass) =>
    card = new klass
    @add(card)
