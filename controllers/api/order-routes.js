const router = require('express').Router()
const { Payment, Pizza, Toppings, User } = require('../../models')

router.get('/item/:id', (req, res) => {
  if (req.session.logged_in) {
    const { id } = req.params
    res.render('order-item', { id })
  } else {
    res.redirect('login')
  }
})

module.exports = router
