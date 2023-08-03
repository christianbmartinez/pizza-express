const router = require('express').Router()

// Homepage route
router.get('/', (req, res) => {
  if (req.session.logged_in) {
    res.render('home', { logged_in: true })
  } else {
    res.render('home')
  }
})

// Order route
router.get('/order', (req, res) => {
  if (req.session.logged_in) {
    res.render('order', { logged_in: true })
  } else {
    res.redirect('/login')
  }
})

// Order item route
router.get('/order-item', (req, res) => {
  if (req.session.logged_in) {
    res.render('order-item', { logged_in: true })
  } else {
    res.redirect('/login')
  }
})

// Order placed route
router.get('/order-placed', (req, res) => {
  if (req.session.logged_in) {
    res.render('order-placed', { logged_in: true })
  } else {
    res.redirect('/login')
  }
})

// Checkout route
router.get('/checkout', (req, res) => {
  if (req.session.logged_in) {
    res.render('checkout', { logged_in: true })
  } else {
    res.redirect('/login')
  }
})

// Cart route
router.get('/cart', (req, res) => {
  if (req.session.logged_in) {
    res.render('cart', { logged_in: true })
  } else {
    res.redirect('/login')
  }
})

// Login route
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.render('order', { logged_in: true })
  } else {
    res.render('login')
  }
})

// Signup route
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.render('order', { logged_in: true })
  } else {
    res.redirect('/signup')
  }
})

// Wildcard route
router.get('*', (req, res) => {
  if (req.session.logged_in) {
    res.render('not-found', { logged_in: true })
  } else {
    res.render('not-found')
  }
})

module.exports = router
