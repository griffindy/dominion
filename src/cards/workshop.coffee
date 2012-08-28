class Dominion.Cards.Workshop extends Backbone.Model
  defaults:
    name: 'Workshop'
    cost: 3
    description: 'Gain a card costing up to $4'
    type: 'Action'


  play: ->
    window.game.currentPlayer.selectCardUnder(4)
