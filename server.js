const express = require('express');
// this is pulling in the express package
const app = express();
// this is setting a var for express server 
const PORT = process.env.PORT || 3333;
// this is the PORT for the local host. adding process.env.PORT
const path = require('path');
// pullin in path for path.join
const { engine } = require('express-handlebars');
//requiring handlebars
const {view_routes} = require('./controllers');
// view routes needs to have index.js inside the controllers file to work
// if you go into index.js all it is doing is requiring view and authenticate routes files.
//that is why it wasn't working without the index.js file
// pulling our db connection 
const db = require('./config/db_connection');
const User = require('./models/user');

// attaching sessions to the server 
// const session = require('express-session')

// const SequelizeStore = require('connect-session-sequelize')(session.Store);


// attach .env to process object 

// need to understand 
require('dotenv').config();







//conecting the serve to the front end styling 
app.use(express.static(path.join('front')));


//setting up the handlebars 
app.engine('hbs', engine({ extname: '.hbs'}));
app.set('view engine', 'hbs');


app.use('/', view_routes);
// this is connection the view router


app.use(express.json());
app.use(express.urlencoded({ extended: false}));


// servers up.
// time to work on syncing the DB to our server.

db.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
});


// async function test() {
//     const users = await User.findAll();
//     console.log(users)
// }

// test()