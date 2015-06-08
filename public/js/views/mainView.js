/**
 * Created by Roman on 28.05.2015.
 */
define([
    'text!templates/main.html',
    'views/menu/top'
], function (mainTemplate, topMenu) {
    var mainView = Backbone.View.extend({
        el: '#content',

        template: _.template(mainTemplate),

        initialize: function () {
            this.render();
        },

        render: function () {
            //$(#content).html();
            this.$el.html(this.template());

            var top = new topMenu();

            return this;
        }
    });

    return mainView;
});