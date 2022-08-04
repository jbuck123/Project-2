const express = require('express');
// this is pulling in the express package
const app = express();
// this is setting a var for express server 
const PORT = process.env.PORT || 3333;
// this is the PORT for the local host. adding process.env.PORT

// this is lesting 
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

