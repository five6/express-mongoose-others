var hbs = require('express-hbs');
var assets = require('connect-assets');
var app = $app;
const assetsHelpers = {}
app.engine('html', hbs.express4({
    extname : '.html',
    partialsDir: __dirname + '/views/partials',
    layoutsDir: __dirname + '/views/layout',
    blockHelperName: 'block',
    contentHelperName: 'contentFor',
    beautify: true
}));

hbs.registerHelper('js', function(route, routeOptions) {
    return assetsHelpers.js(route, routeOptions)
})

hbs.registerHelper('css', function(route) {
    return assetsHelpers.css(route)
})

hbs.registerHelper('img', function(route) {
    return assetsHelpers.img(route)
})

app.set('view engine', 'html');
app.set('views', __dirname + '/views');



var config = {
    buildDir : 'build',
    build  : true,
    compress:false,
    helperContext : assetsHelpers,
    paths: [
        'css',
        'js',
        'img'
    ]
}
app.use(assets(config));