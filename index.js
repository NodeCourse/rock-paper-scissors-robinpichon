const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// Use Pug to render views
app.set('view engine', 'pug');
// Serve assets from the public folder
app.use(express.static('public'));
// Decode form data
app.use(bodyParser.urlencoded({ extended: true }));
// Parse JSON body
app.use(bodyParser.json());
// Render the home page
app.get('/', (req, res) => {
  // Express will look for a page named homepage.pug
    // in the "views" folder so you should have a "views/homepage.pug" file
    res.render('index');
});
// Render the signup page
app.get('/signup', (req, res) => {
    // See above comment about render
    res.render('signup');
});
// Add a route to handle signup form submission
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    // Here should go the code to create an user record
    // Once that is done, you can redirect to the relevant page:
    // res.redirect(path)
});
app.listen(3000);
