// exports. is short hand of module.exports.. this file is exporting this function.

exports.isLoggedIn = function (req, res) {
    const user_id = req.session.userId;
   
                    // user_id is created in the user model page.
    const is_auth_route = req.path.match(/register|login/gi);
  
    // does this session have a user_id property attatch to it?
    // if yes then isLoggedIn
    // no? 
    if (is_auth_route && user_id) {
      return res.redirect('/');
    }
  
  }

