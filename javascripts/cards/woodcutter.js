(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dominion.Cards.Woodcutter = (function(_super) {

    __extends(Woodcutter, _super);

    function Woodcutter() {
      return Woodcutter.__super__.constructor.apply(this, arguments);
    }

    Woodcutter.prototype.defaults = {
      name: 'Woodcutter',
      cost: 3,
      description: '+1 Buy; +$2',
      type: 'action'
    };

    Woodcutter.prototype.play = function() {
      return window.game.turn.buys += 1;
    };

    return Woodcutter;

  })(Backbone.Model);

}).call(this);
