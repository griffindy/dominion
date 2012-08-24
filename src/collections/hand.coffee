class Dominion.Collections.Hand extends Backbone.Collection
  model: Dominion.Card

  initialize: ->
    @get('player').drawCard(5)
