class Dominion.Game
  constructor: (number_of_players) ->
    @players = []
    @players.push(new Dominion.Player) for i in [1..number_of_players]
    @currentPlayerPosition = 0
    @currentPlayer = @players[@currentPlayerPosition]

  nextPlayer: ->
    numberOfPlayers = @players.length
    if @currentPlayer == numberOfPlayers
      @currentPlayerPosition = 0
      @currentPlayer = @players[@currentPlayerPosition]
    else
      @currentPlayer = @players[@currentPlayerPosition + 1]
