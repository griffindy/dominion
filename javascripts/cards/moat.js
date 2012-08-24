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
      description: "+1 Action      Discard any number of cards.      +1 Card per card discarded.",
      type: 'Action-Reaction'
    };

    return Moat;

  })(Backbone.Model);

}).call(this);
