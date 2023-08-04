const router = require('express').Router()
const { Payment, Pizza, Toppings, User, Order } = require('../../models')

router.get('/item/:id', async (req, res) => {
  if (req.session.logged_in) {
    try {
      const getPizzabyId = await Pizza.findOne({ where: { id: req.params.id } });
      const getToppings = await Toppings.findAll({ attributes: ['name'] })

      const pizza = getPizzabyId.get({ plain: true });
      console.log(pizza);
      const toppingData = getToppings.map((toppings) => toppings.dataValues)
      console.log(toppingData);

      if (!pizza) {
        res.status(404).json({ message: 'no pizza found with that id' });
        return;
      }

      res.render('order-item', { pizza, Toppings, logged_in: true });

    } catch (err) {
      res.status(500).json(err);
    }
  }
  else {
    res.render('login');

  }
})

router.post('/', async (req, res) => {
  try {
    const newOrder = await Order.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(newOrder);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', async (req, res) => {

  try {
    const orderData = await Order.destroy({ where: { id: req.params.id } });

    if (!orderData) {
      res.status(404).json({ message: 'no data found with this id' });
    }
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
