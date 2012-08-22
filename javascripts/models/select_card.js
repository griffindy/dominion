(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dominion.Models.SelectCard = (function(_super) {

    __extends(SelectCard, _super);

    function SelectCard() {
      return SelectCard.__super__.constructor.apply(this, arguments);
    }

    return SelectCard;

  })(Backbone.Model);

}).call(this);
