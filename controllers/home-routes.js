const router = require('express').Router()

// Homepage route
router.get('/', (req, res) => {
  res.render('home')
})

// Order route
router.get('/order', (req, res) => {
  res.render('order')
})

// Login route
router.get('/login', (req, res) => {
  res.render('login')
})

// Signup route
router.get('/signup', (req, res) => {
  res.render('signup')
})

module.exports = router
