/**
 * Created by Roman on 25.05.2015.
 */
var App = App ||  {  };

require.config({
    paths: {
        jQuery: './libs/jquery/dist/jquery',
        jQueryUI: './libs/jqueryui/jquery-ui',
        Underscore: './libs/underscore/underscore',
        Backbone: './libs/backbone/backbone',
        moment: './libs/moment/moment',
        views: './views',
        models: './models',
        collections: './collections',
        text: './libs/text/text',
        templates: '../templates'
    },
    shim: {
        'jQueryUI': ['jQuery'],
        'Backbone': ['Underscore', 'jQueryUI'],
        'app': ['Backbone']
    }
});

require(['app'], function(app){
    app.init();
});