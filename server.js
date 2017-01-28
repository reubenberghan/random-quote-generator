'use strict';

// init express
const express = require('express');
const app = express();

// set PORT
const PORT = process.env.PORT || 3000;
app.set(`port`, PORT);

// test res
// app.get(`/`, (req, res) => res.send(`Hello world...`));

// serve files in public folder
app.use(express.static(`public`));

// start server
app.listen(app.get(`port`), () => console.log(`Express server running on port ${ app.get(`port`) }`));
