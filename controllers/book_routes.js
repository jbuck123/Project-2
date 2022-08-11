const book_router = require('express').Router()
const Book = require('../models/book');
const User = require('../models/User');
// const auth_router = require('./auth_routes');


book_router.post('/', async (req, res) => {
    // console.log(req.headers);
    const {title, image_url} = req.body
    console.log('books routing')
    console.log(req.body)
    
    // check to ensure an image pops up
    if(!image_url || !title){
        res.status(400).json('Thumbnail image cannot be blank.')
        // req.session.errors = ["no image "]
    }
    

    // create new book
    const user = await User.findByPk(req.session.userId)
    const newFavBook = await user.createBook(req.body)
    res.redirect('/')
    // console.log("this is " + newFavBook)
    // console.log("this is " + req.body)
    // if(newFavBook) {
    //     res.status(200).json(newFavBook)
    //     // console.log(newFavBook)

    // }
    // // res.status(500).json('Internal Server Error BEEP BOOP')
    // next();
})

module.exports = book_router;