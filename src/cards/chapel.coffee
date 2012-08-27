class Dominion.Cards.Chapel extends Backbone.Model
  defaults:
    'cost': 2
    'description': 'Trash up to 4 cards from your hand'

  play: ->
    cardsToBeTrashed = (window.game.currentPlayer.chooseCard for i in [1..4])
    Dominion.trash card for card in cardsToBeTrashed
