const router = require('express').Router()

// Homepage route
router.get('/', (req, res) => {
  res.render('home')
})

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
    res.render('login');
});




module.exports = router;
