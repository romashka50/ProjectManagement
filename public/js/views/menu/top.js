/**
 * Created by Roman on 06.06.2015.
 */
define([
    'text!templates/menu/top.html'
], function (content) {
    var mainView = Backbone.View.extend({
        el: '#topMenu',

        template: _.template(content),

        events: {

        },

        initialize: function () {
            this.render();
        },


        render: function () {
            this.$el.html(this.template());

            return this;
        }
    });

    return mainView;
});