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
      const findOrder = await Order.findOne({
        where: {
          userId: req.session.user_id,
        },
        attributes: ['id', 'order_date', 'total_price', 'pizzaId'],
        order: [['order_date', 'DESC']],
      })

      const findPizza = await Pizza.findOne({
        where: {
          id: findOrder.dataValues.pizzaId,
        },
        attributes: ['id', 'name', 'description', 'price', 'img_url'],
      })

      const findUser = await User.findOne({
        where: {
          id: req.session.user_id,
        },
        attributes: ['full_name', 'street_name', 'city', 'state', 'zip_code'],
      })

      if (!findOrder || !findUser) {
        res.status(404).json({ message: 'no order or user found' })
        return
      }

      const order = findOrder.get({ plain: true })
      const pizza = findPizza.get({ plain: true })
      const user = findUser.get({ plain: true })

      console.log('ORDER: ', order, 'USER: ', user, 'PIZZA: ', pizza)

      res.render('checkout', { order, user, pizza, logged_in: true })
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
