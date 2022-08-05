//set up the first route

const view_router = require('express').Router();

// get route listening on localhost:3333

view_router.get('/', (request, response) => {
    response.render('index');
});

// login page

view_router.get('/login', (req, res) => {
    res.render('login')
})

//register page
view_router.get('/register', (req, res) => {
    res.render('register')

    // another form section 
    // this one will be copy pasted from login with an additional section for email
})

module.exports = view_router


