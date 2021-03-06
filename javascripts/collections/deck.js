(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dominion.Deck = (function(_super) {

    __extends(Deck, _super);

    function Deck() {
      this.addCard = __bind(this.addCard, this);
      return Deck.__super__.constructor.apply(this, arguments);
    }

    Deck.prototype.initialize = function() {
      var i, _i, _j, _results;
      for (i = _i = 1; _i <= 7; i = ++_i) {
        this.addCard(Dominion.Cards.Copper);
      }
      _results = [];
      for (i = _j = 1; _j <= 3; i = ++_j) {
        _results.push(this.addCard(Dominion.Cards.Estate));
      }
      return _results;
    };

    Deck.prototype.addCard = function(klass) {
      var card;
      card = new klass;
      return this.add(card);
    };

    return Deck;

  })(Backbone.Collection);

}).call(this);
