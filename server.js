const express = require('express');
// this is pulling in the express package
const path = require('path');
const { isLoggedIn } = require('./controllers/helpers');

// this is the PORT for the local host. adding process.env.PORT
//requiring handlebars
const { engine } = require('express-handlebars');
const PORT = process.env.PORT || 3333;
// pullin in path for path.join

const db = require('./config/db_connection');
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const User = require('./models/user');
// attach .env to process object 
// need to understand 
require('dotenv').config();
//conecting the serve to the front end styling 
const { view_routes, auth_routes } = require('./controllers')

const app = express();
// this is setting a var for express serve

app.use(express.static(path.join('front')));


//setting up the handlebars 
app.engine('hbs', engine({ extname: '.hbs'}));
app.set('view engine', 'hbs');





app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    //stores session id to database
    store: new SequelizeStore({ db }),
    // if session data is not changed during a req
    // this will "forget" the session

    saveUninitialized: true,
    // prevents SequelizeStore from deleting idle session data
    resave: false,

    cookie: {
      httpOnly: false,
    },
  })
);

// middle ware goes before your routes
// middle ware goes before your routes
// middle ware goes before your routes
// middle ware goes before your routes

app.use('/', view_routes);
// this is connection the view router
app.use('/auth', auth_routes);
// servers up.
// time to work on syncing the DB to our server.

db.sync({force: true}).then(() => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
});



