const router = require('express').Router()

// Homepage route
router.get('/', (req, res) => {
  res.render('home')
})

// Order route
router.get('/order', (req, res) => {
  res.render('order')
})

// Order item route
router.get('/order-item', (req, res) => {
  res.render('order-item')
})

// Order placed route
router.get('/order-placed', (req, res) => {
  res.render('order-placed')
})

// Checkout route
router.get('/checkout', (req, res) => {
  res.render('checkout')
})

// Cart route
router.get('/cart', (req, res) => {
  res.render('cart')
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
