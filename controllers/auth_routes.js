// const bcrypt = require('bcrypt')
// user []

// work in progress.

// app.post('/login', (req, res) => {
//     req.body.username
//     req.body.password
// });
// app.post('/register', async (req, res) => {
//     // req.body.email
//     // req.body.username
//     try{ 
//         const hashedPassword = await bcrypt.hash(req.body.password, 10)
//         user.push({
//             id:Date.now().toString(),
//             name: req.body.username,
//             email: req.body.email,
//             password: hashedPassword
//         })
//         res.redirect('/login')
//     } catch{
//         res.redirect('/register')
//     }
//     console.log(user)
// })
