(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dominion.Cards.Cellar = (function(_super) {

    __extends(Cellar, _super);

    function Cellar() {
      return Cellar.__super__.constructor.apply(this, arguments);
    }

    Cellar.prototype.defaults = {
      cost: 2,
      type: 'action',
      description: "+1 Action\nDiscard any number of cards.\n+1 Card per card discarded."
    };

    Cellar.prototype.play = function() {
      return window.game.turn.actions += 1;
    };

    return Cellar;

  })(Backbone.Model);

}).call(this);
