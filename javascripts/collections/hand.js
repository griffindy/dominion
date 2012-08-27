(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dominion.Collections.Hand = (function(_super) {

    __extends(Hand, _super);

    function Hand() {
      return Hand.__super__.constructor.apply(this, arguments);
    }

    Hand.prototype.model = Dominion.Card;

    Hand.prototype.initialize = function() {
      return this.get('player').drawCard(5);
    };

    return Hand;

  })(Backbone.Collection);

}).call(this);