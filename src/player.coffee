class Dominion.Player extends Backbone.Model
  initialize: ->
    @set({ deck: new Dominion.Deck })

  chooseCard: (number = 1) ->

  drawCard: (number = 1) ->
    @get('hand').push(@get('deck').pop())

  drawNewHand: ->
