// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.Dominion = {
    Cards: {},
    Views: {},
    Deck: {},
    Player: {},
    Turn: {},
    Supply: {}
  };

  jQuery(function() {
    var mainView;
    Dominion.Views.MainView = (function(_super) {

      __extends(MainView, _super);

      function MainView() {
        return MainView.__super__.constructor.apply(this, arguments);
      }

      MainView.prototype.el = 'body';

      MainView.prototype.events = {
        'click header': 'doSomething'
      };

      MainView.prototype.doSomething = function() {
        return Dominion.something(this.el);
      };

      return MainView;

    })(Backbone.View);
    return mainView = new Dominion.Views.MainView;
  });

  Dominion.something = function(el) {
    return $(el).append('this is some stuff balabalaab');
  };

}).call(this);
