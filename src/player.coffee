class Dominion.Player extends Backbone.Model
  initialize: ->
    @set({ deck: new Dominion.Deck })
    @set({ hand: new Dominion.Collections.Hand })

  drawCard: (number = 1) ->
    @get('hand').push(@get('deck').pop()) for i in [1..number]

  drawNewHand: ->
    @drawCard(5)

  discardCard: (number = 1)->
    @get('discardPile').push(@get('hand').pop()) for i in [1..number]

  chooseCard: ->
