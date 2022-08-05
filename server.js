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


//conecting the serve to the front end styling 
app.use(express.static(path.join('front')));

//setting up the handlebars 
app.engine('hbs', engine({ extname: '.hbs'}));

app.set('view engine', 'hbs');


app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/', (req, res) => {
    res.render('index')

    // this is where you can set up handlebars data.
    // this will also be the homepage
})

// login page

app.get('/login', (req, res) => {
    res.render('login', {
        user: {
            username: 'james',
            age: 24
        },
    })

    // we can add a form section here for USERNAME and password 

} )


app.get('/register', (req, res) => {
    res.render('register')

    // another form section 
    // this one will be copy pasted from login with an additional section for email
})

// servers up.
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))