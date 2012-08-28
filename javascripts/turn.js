(function() {

  Dominion.Turn = (function() {

    function Turn(options) {
      if (options == null) {
        options = {};
      }
      this.actions = options['actions'] || 1;
      this.buys = options['buys'] || 1;
      this.currency = options['currency'] || 0;
    }

    return Turn;

  })();

}).call(this);
