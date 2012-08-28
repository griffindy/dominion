class Dominion.Cards.Village extends Backbone.Model
  defaults:
    cost: 3
    description: '+1 Card; +2 Actions'
    type: 'Action'

  play: ->
    window.game.currentPlayer.drawCard()
