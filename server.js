const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view enigne', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

app.get('/', (req, res) => {
//res.send('<h1>Hello Express!</h1>');
    res.render('home.hbs', {
        pageTitle: 'Welcome!',
        welcomeMessage: 'Welcome traveler'
    })
});

app.get('/about', (req, res) => {
   res.render('about.hbs', {
       pageTitle: 'About Page'
   });
});

app.get('/bad', (req, res) => {
   res.send({
       errorMessage: 'Error occured'
   }) 
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});