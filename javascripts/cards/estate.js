(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dominion.Cards.Estate = (function(_super) {

    __extends(Estate, _super);

    function Estate() {
      return Estate.__super__.constructor.apply(this, arguments);
    }

    Estate.prototype.defaults = {
      'name': 'Estate',
      'worth': 0,
      'cost': 2,
      'type': 'victory'
    };

    return Estate;

  })(Backbone.Model);

}).call(this);
