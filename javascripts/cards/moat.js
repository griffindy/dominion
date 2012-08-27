(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dominion.Cards.Moat = (function(_super) {

    __extends(Moat, _super);

    function Moat() {
      return Moat.__super__.constructor.apply(this, arguments);
    }

    Moat.prototype.defaults = {
      cost: 2,
      description: "+2 Cards      When another player playts an Attack card, you may reveal this from your hand. If you do, you are unaffected by that Attack.",
      type: 'Action-Reaction'
    };

    Moat.prototype.play = function() {
      return window.game.currentPlayer.drawCard(2);
    };

    return Moat;

  })(Backbone.Model);

}).call(this);
