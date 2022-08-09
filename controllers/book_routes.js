const book_router = require('express').Router()
const Book = require('../models/book');
const auth_router = require('./auth_routes');


book_router.post('/', (req, res) => {
    const {title, thumbnailImg} = req.body
    console.log('books routing')
    
    // check to ensure an image pops up
    if(!thumbnailImg, !title){
        req.session.errors = ["no image "]
    }
    

    // create new book

    Book.create(req.body)
})