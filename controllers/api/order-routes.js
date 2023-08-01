const router = require('express').Router()
const { Payment, Pizza, Toppings, User, Order } = require('../../models')

router.get('/item/:id', (req, res) => {
  const num = req.params.id
  res.render('order-item', { num })
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

router.put('/:id', async (req, res) => {
  
  try {
    const orderData = await Order.update(req.body, { where: { id: req.params.id } });

    if (!orderData) {
      res.status(404).json({ message: 'No Order found' });
      return;
    }

    res.status(200).json(orderData);
  } catch (err) {
    res.status(500).json(err);
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
