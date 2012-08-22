class Dominion.Player extends Backbone.Model
  initialize: ->
    @set({ deck: new Dominion.Deck })

  chooseCard: (number = 1) ->
