(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dominion.Cards.Copper = (function(_super) {

    __extends(Copper, _super);

    function Copper() {
      return Copper.__super__.constructor.apply(this, arguments);
    }

    Copper.prototype.defaults = {
      'name': 'Copper',
      'worth': 1,
      'cost': 0,
      'type': 'currency',
      'description': ''
    };

    return Copper;

  })(Backbone.Model);

}).call(this);
