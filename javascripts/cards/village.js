(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dominion.Cards.Village = (function(_super) {

    __extends(Village, _super);

    function Village() {
      return Village.__super__.constructor.apply(this, arguments);
    }

    Village.prototype.defaults = {
      name: 'Village',
      cost: 3,
      description: '+1 Card; +2 Actions',
      type: 'Action'
    };

    Village.prototype.play = function() {
      return window.game.currentPlayer.drawCard(1);
    };

    return Village;

  })(Backbone.Model);

}).call(this);
