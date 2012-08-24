class Dominion.Views.SelectView extends Backbone.View
  className: 'select-card'

  render: ->
    @$el.html "#{@model.get('card').get('name')}"
    @
