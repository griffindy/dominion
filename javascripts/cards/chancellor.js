(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dominion.Cards.Chancellor = (function(_super) {

    __extends(Chancellor, _super);

    function Chancellor() {
      return Chancellor.__super__.constructor.apply(this, arguments);
    }

    Chancellor.prototype.defaults = {
      cost: 3,
      description: "+2$\nYou may immediately put your deck in your discard pile",
      type: 'Action'
    };

    Chancellor.prototype.play = function() {
      return window.game.turn.currency += 2;
    };

    return Chancellor;

  })(Backbone.Model);

}).call(this);
