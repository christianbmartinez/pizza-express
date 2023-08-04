const router = require('express').Router()
const { Payment, Pizza, Toppings, User, Order } = require('../../models')

router.get('/item/:id', async (req, res) => {
  if (req.session.logged_in) {
    try {
      const getPizzabyId = await Pizza.findOne({
        where: {
          id: req.params.id,
        },
        attributes: ['id', 'name', 'description', 'price', 'img_url'],
      })
      const getToppings = await Toppings.findAll({
        attributes: ['id', 'name', 'price'],
      })

      const allToppings = getToppings.map((topping) => topping.dataValues)

      const pizza = getPizzabyId.get({ plain: true })

      if (!pizza) {
        res.status(404).json({ message: 'no pizza found with that id' })
        return
      }

      res.render('order-item', { pizza, allToppings, logged_in: true })
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.render('login')
  }
})

router.post('/:id', async (req, res) => {
  console.log(req.body)
  if (req.session.logged_in) {
    try {
      const newOrder = await Order.create({
        ...req.body,
        user_id: req.session.user_id,
      })

      console.log('Order Created: ', newOrder)

      res.render('checkout', { newOrder, logged_in: true })
    } catch (err) {
      res.status(400).json(err)
    }
  } else {
    res.render('login')
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const orderData = await Order.destroy({ where: { id: req.params.id } })

    if (!orderData) {
      res.status(404).json({ message: 'no data found with this id' })
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
