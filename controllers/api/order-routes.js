const router = require('express').Router()
const { Payment, Pizza, Toppings, User, Order } = require('../../models')

router.get('/item', async (req, res) => {
  
  try {
    const orderData = await Pizza.findAll({ include: [{ model: Pizza, attributes: ['id', 'name', 'description', 'price'] }]
});

    res.render('order', orderData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/item/:id', async (req, res) => {
  try {
    const orderData = await Pizza.findOne({where: {id: req.params.id}, include: [{ model: Toppings, attributes: ['name'], through: PizzaToppings}] 
  });

    if (!orderData) {
      res.status(404).json({ message: 'no order found with that id' });
      return;
    }

    res.render('order', orderData);
  } catch (err) {
    res.status(500).json(err);
  }


})

router.post('/', async (req, res) => {
  try {
    const newOrder = await Order.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newOrder);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', async (req, res) => {
 
  try {
    const orderData = await Order.destroy({ where: {id: req.params.id} });

    if(!orderData){
      res.status(404).json({message: 'no data found with this id'});
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
