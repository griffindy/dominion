(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dominion.Cards.Chapel = (function(_super) {

    __extends(Chapel, _super);

    function Chapel() {
      return Chapel.__super__.constructor.apply(this, arguments);
    }

    Chapel.prototype.initialize = function(player, turn) {
      this.player = player;
      this.turn = turn;
    };

    Chapel.prototype.defaults = {
      'cost': 2,
      'description': 'Trash up to 4 cards from your hand'
    };

    Chapel.prototype.play = function() {
      var card, cardsToBeTrashed, i, _i, _len, _results;
      cardsToBeTrashed = (function() {
        var _i, _results;
        _results = [];
        for (i = _i = 1; _i <= 4; i = ++_i) {
          _results.push(this.player.chooseCard);
        }
        return _results;
      }).call(this);
      _results = [];
      for (_i = 0, _len = cardsToBeTrashed.length; _i < _len; _i++) {
        card = cardsToBeTrashed[_i];
        _results.push(Dominion.trash(card));
      }
      return _results;
    };

    return Chapel;

  })(Backbone.Model);

}).call(this);
