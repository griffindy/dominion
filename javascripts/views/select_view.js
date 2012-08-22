(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dominion.Views.SelectView = (function(_super) {

    __extends(SelectView, _super);

    function SelectView() {
      return SelectView.__super__.constructor.apply(this, arguments);
    }

    SelectView.prototype.className = 'select-card';

    SelectView.prototype.render = function() {
      return this;
    };

    return SelectView;

  })(Backbone.View);

}).call(this);
