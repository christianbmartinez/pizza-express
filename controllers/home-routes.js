const router = require('express').Router()
const { Pizza, Toppings, User, Order } = require('../models')

// Homepage route
router.get('/', (req, res) => {
  if (req.session.logged_in) {
    res.render('home', { logged_in: true })
  } else {
    res.render('home')
  }
})

// Order route
router.get('/order', async (req, res) => {
  if (req.session.logged_in) {
    try {
      const getPizzas = await Pizza.findAll({
        attributes: ['id', 'name', 'description', 'price', 'img_url'],
      })

      const pizzas = getPizzas.map((pizza) => pizza.dataValues)

      if (!pizzas) {
        res.status(404).json({ message: 'No pizzas found' })
        return
      }

      res.render('order', { pizzas, logged_in: true })
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  } else {
    res.render('login')
  }
})

// Order placed route
router.get('/order-placed', (req, res) => {
  if (req.session.logged_in) {
    res.render('order-placed', { logged_in: true })
  } else {
    res.render('login')
  }
})

// Checkout route
router.get('/checkout', async (req, res) => {
  if (req.session.logged_in) {
    try {
      const order = await Order.findOne({
        where: {
          userId: req.session.user_id,
        },
        attributes: ['id', 'name', 'description', 'price', 'img_url'],
      })

      if (!order) {
        res.status(404).json({ message: 'no order found with that user id' })
        return
      }

      console.log(order)

      res.render('checkout', { order, logged_in: true })
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.render('login')
  }
})

// Cart route
router.get('/cart', (req, res) => {
  if (req.session.logged_in) {
    res.render('cart', { logged_in: true })
  } else {
    res.render('login')
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
    res.render('signup')
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
