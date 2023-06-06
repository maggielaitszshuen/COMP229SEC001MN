/*<!---File name: express.js-->
<!---Student name: Tsz Shuen Lai-->
<!---Student ID: 301278443-->
<!---Date: 1 Jun 2023-->*/
var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

module.exports = function () {
    var app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }
    app.use(bodyParser.urlencoded({
        extended: true
        }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    //app.use('/', require('../app/routes/index.server.routes.js'));
    app.use('/', require('../app/routes/index.js'));

    app.get('/', function(req, res) {
        res.render('index');
      });
      
    //app.use('/', 'routes');
    //require('../app/routes/index.server.routes.js')(app);
    app.use(express.static('./public'));
    app.use(express.static('./node_modules'));
    return app;
};