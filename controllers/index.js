// Export an object that will hold all of our route files as properties
module.exports = {
    // Set our view_routes property to our required view_routes object
    view_routes: require('./view_routes'),
    auth_routes: require('./auth_routes'),
    book_routes: require('./book_routes'),
  }