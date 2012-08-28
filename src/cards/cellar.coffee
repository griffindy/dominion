class Dominion.Cards.Cellar extends Backbone.Model
  defaults:
    cost: 2
    type: 'action'
    description: """
      +1 Action
      Discard any number of cards.
      +1 Card per card discarded.
    """

  play: ->
    window.game.turn.actions += 1
