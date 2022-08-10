const book_router = require('express').Router()
const Book = require('../models/book');
// const auth_router = require('./auth_routes');


book_router.post('/', (req, res) => {
    console.log(req.headers);
    const {title, image_url} = req.body
    console.log('books routing')
    
    // check to ensure an image pops up
    if(!image_url || !title){
        res.status(400).json('Thumbnail image cannot be blank.')
        // req.session.errors = ["no image "]
    }
    

    // create new book

    const newFavBook = Book.create({title, image_url})
    console.log("this is " + newFavBook)
    if(newFavBook) {
        res.status(200).json(newFavBook)
    }
    // res.status(500).json('Internal Server Error BEEP BOOP')
})

module.exports = book_router;