
const express = require('express');
const PORT = process.env.PORT || 3333;
// set up the db 
const db = require('./config/db_connection')