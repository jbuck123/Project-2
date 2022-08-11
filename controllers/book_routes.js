const book_router = require('express').Router()
const Book = require('../models/book');
const User = require('../models/User');
// const auth_router = require('./auth_routes');


book_router.post('/', async (req, res) => {
    const {title, image_url} = req.body
    console.log('books routing')
    console.log(req.body)
    
    // check to ensure an image pops up
    if(!image_url || !title){
        res.status(400).json('Thumbnail image cannot be blank.')
    }
    

    // create new book
    const user = await User.findByPk(req.session.userId)
    const newFavBook = await user.createBook(req.body)
    res.redirect('/')
})

module.exports = book_router;