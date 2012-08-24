(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dominion.Player = (function(_super) {

    __extends(Player, _super);

    function Player() {
      return Player.__super__.constructor.apply(this, arguments);
    }

    Player.prototype.initialize = function() {
      return this.set({
        deck: new Dominion.Deck
      });
    };

    Player.prototype.chooseCard = function(number) {
      if (number == null) {
        number = 1;
      }
    };

    Player.prototype.drawCard = function(number) {
      if (number == null) {
        number = 1;
      }
      return this.get('hand').push(this.get('deck').pop());
    };

    Player.prototype.drawNewHand = function() {};

    return Player;

  })(Backbone.Model);

}).call(this);
