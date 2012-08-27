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

    Player.prototype.drawCard = function(number) {
      var i, _i, _results;
      if (number == null) {
        number = 1;
      }
      _results = [];
      for (i = _i = 1; 1 <= number ? _i <= number : _i >= number; i = 1 <= number ? ++_i : --_i) {
        _results.push(this.get('hand').push(this.get('deck').pop()));
      }
      return _results;
    };

    Player.prototype.drawNewHand = function() {
      return this.drawCard(5);
    };

    Player.prototype.discardCard = function(number) {
      var i, _i, _results;
      if (number == null) {
        number = 1;
      }
      _results = [];
      for (i = _i = 1; 1 <= number ? _i <= number : _i >= number; i = 1 <= number ? ++_i : --_i) {
        _results.push(this.get('discardPile').push(this.get('hand').pop()));
      }
      return _results;
    };

    Player.prototype.chooseCard = function() {
      return console.log('this method needs to be implemented');
    };

    return Player;

  })(Backbone.Model);

}).call(this);
