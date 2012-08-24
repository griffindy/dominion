class Dominion.Game
  constructor: (number_of_players) ->
    @players = []
    @players.push(new Dominion.Player) for i in [1..number_of_players]
