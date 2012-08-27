class Dominion.Cards.Moat extends Backbone.Model
  defaults:
    cost: 2
    description: "+2 Cards
      When another player playts an Attack card, you may reveal this from your hand. If you do, you are unaffected by that Attack."
    type: 'Action-Reaction'

  play: ->
    cardsToBeDiscarded = (@player.chooseCard for i in [1..4])
