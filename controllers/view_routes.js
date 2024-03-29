//set up the first route
const view_router = require("express").Router();
// const { isLoggedIn } = require("./helpers");
const User = require("../models/user");
const { isLoggedIn } = require("./helpers");
const Book = require('../models/book');

// get route listening on localhost:3333
view_router.get("/", isLoggedIn, (request, response) => {
  // id fro mthe session object
  // console.log(request.session.userId)
  const user_id = request.session.userId;

  if (user_id) {
    return User.findOne({
      where: {
        id: user_id,
      },
      include:Book,
      // only the id, the email, and the username

      attributes: ["id", "email", "username"],
    }).then((user) => {
      // user.createBook()
      user = {
        username: user.username,
        email: user.email,
        books: user.books.map(book => {
          return {
            id: book.id,
            title: book.title,
            image_url: book.image_url,
          }
        })
      };

      response.render("index", { user });
    });
  }

  response.render("index");
  
});
// login page
view_router.get("/login", isLoggedIn, (request, response) => {
  //errors are being attatched to the session object, so it can be sent through when the user visits /login or /register
  response.render("login", { errors: request.session.errors });
  
});

//register page
view_router.get("/register", isLoggedIn, (request, response) => {
  response.render("register", { errors: request.session.errors });
  
});

module.exports = view_router;
