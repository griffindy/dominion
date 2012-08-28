(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dominion.Cards.Workshop = (function(_super) {

    __extends(Workshop, _super);

    function Workshop() {
      return Workshop.__super__.constructor.apply(this, arguments);
    }

    Workshop.prototype.defaults = {
      name: 'Workshop',
      cost: 3,
      description: 'Gain a card costing up to $4',
      type: 'Action'
    };

    Workshop.prototype.play = function() {
      return window.game.currentPlayer.selectCardUnder(4);
    };

    return Workshop;

  })(Backbone.Model);

}).call(this);
