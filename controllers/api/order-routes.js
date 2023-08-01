const router = require('express').Router()
const { Payment, Pizza, Toppings, User } = require('../../models')

router.get('/item/:id', (req, res) => {
  const num = req.params.id
  res.render('order-item', { num })
})

module.exports = router
