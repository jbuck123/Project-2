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
const view_routes = require('./controllers/view_routes');




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
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))