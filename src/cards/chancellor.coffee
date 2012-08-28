class Dominion.Cards.Chancellor extends Backbone.Model
  defaults:
    cost: 3
    description: """
      +2$
      You may immediately put your deck in your discard pile
      """
    type: 'Action'

  play: ->
    window.game.turn.currency += 2
