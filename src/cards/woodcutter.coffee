class Dominion.Cards.Woodcutter extends Backbone.Model
  defaults:
    name: 'Woodcutter'
    cost: 3
    description: '+1 Buy; +$2'
    type: 'action'

  play: ->
    window.game.turn.buys += 1
