class Dominion.Turn
  constructor: (options = {}) ->
    @actions = options['actions'] || 1
    @buys = options['buys'] || 1
    @currency = options['currency'] || 0
