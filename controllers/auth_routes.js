const auth_router = require('express').Router();
const User = require('../models/User');
const { isLoggedIn } = require('./helpers');
// const { isLoggedIn } = require('./helpers');

// work in progress.
auth_router.post('/register', isLoggedIn,  (req, res) => {
    const {username, email, passwords} = req.body;

    if (!username || !email || !passwords) {
        // if empty return errors

        req.session.errors = ["please enter username/ email/ password"]
        // if error also redirect 
        return res.redirect('/register')
    }
// checking if the email is taken.
    User.findOne({
        where: {
            email
        }
    }).then(user => {
        if (user) {
    
            req.session.errors = ["That email is in use"]
            // reload the page
            return res.redirect('/register')
        }

        // create the new user 

        User.create(req.body)
            .then(new_user => {
                req.session.save(() => {
                    //stores user id in the session object/ used to check if user is logged
                    req.session.userId = new_user.id;
                    // redircts new client back to homepage
                    res.redirect('/');
                });
            }).catch(err => {
                // this error shows in the register.hbs view.... so sick
                //err returns an array of an object of the err, this is mapping through the object and using just hte message property
                req.session.errors = err.errors.map(err => err.message);
                // the awesome reload the page aka try again :)
                res.redirect('/register')
            });
    });
});
// validates user 
// use req.session.errors
// use res.redirect
auth_router.post('/login', isLoggedIn, (req, res) =>{
    const {email, passwords } = req.body;

    //check if any of the required fields are empy

    if(!req.body.email || !req.body.passwords) {
        // if any of those are blank than run this error

        req.session.errors = ["please don't leave any text fields empty."]
        return res.redirect('/login')
    }
    //check if there is a username with a matching email in the database

    User.findOne({
        where: {
            email
        }
        // ask for JD to explain this one monday
    }).then(async user => {
        //
        if (!user) {
            req.session.errors = ['Wrong Email or Password']
            // good old refresh to try again
            return res.redirect('/login')
        }
        //check if the password is valid

        // uses the custom method attatched to hte User model
        const pass_is_valid = await user.validatePassword(passwords, user.password);

        if (!pass_is_valid){
            req.session.errors = ['Password incorrect'];
            res.redirect('/login');
            
        }
            req.session.save(() => {
                req.session.userId = user.id; 

                res.redirect('/');
            });

    })
});

auth_router.get('/logout', (req, res) => {
    // If they are already logged out and we have no session data, we redirect them
    // back to the index view
    if (!req.session.userId) return res.redirect('/');
  
    // The session destroy method deletes the session data from the database, so they
    // are no longer authenticated 
    req.session.destroy(() => {
      // Once the session is killed, we redirect them back to the index view
      res.redirect('/');
    });
  })

module.exports = auth_router;
// logout section will come soon
