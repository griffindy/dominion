(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dominion.Turn = (function(_super) {

    __extends(Turn, _super);

    function Turn() {
      return Turn.__super__.constructor.apply(this, arguments);
    }

    Turn.prototype.initialize = function(number) {};

    return Turn;

  })(Backbone.Model);

}).call(this);