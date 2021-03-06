const express = require('express');
const handlebars = require('express-handlebars');
const dotenv = require('dotenv');
const path = require('path');
const routes = require('./routes/routes');


dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/fonts', express.static(__dirname + 'public/fonts'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));

// Handlebars
app.set('view engine', 'hbs');
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.use(express.json());
app.use(routes);

// Render 404 page
app.use(function(req, res, next) {
    res.status(404)
        .render('404');
});

// Runing the app
app.listen(PORT, () => console.log(`Project is running on http://localhost:${PORT}`));