const express = require('express');
const handlebars = require('express-handlebars');
const dotenv = require('dotenv');
const path = require('path');
const routes = require('./routes/routes');


dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

// Static files
app.use(express.static('public'));

app.use(express.json());
app.use(routes);

// Render 404 page
app.use(function(req, res, next) {
    res.redirect('/');
});

// Runing the app
app.listen(PORT, () => console.log(`Project is running on http://localhost:${PORT}`));