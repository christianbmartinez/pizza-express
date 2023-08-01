const { Order } = require('../models');

const orderData = [
  {
    order_date: '2023-07-27', 
    total_price: 24.99,
    userId: 1, 
    pizzaId: 1, 
    paymentId: 1, 
  },
  {
    order_date: '2023-07-27 17:45:00', 
    total_price: 19.99,
    userId: 2, 
    pizzaId: 2, 
    paymentId: 2, 
  },
];

const seedOrders = () => {
  return Order.bulkCreate(orderData);
};

module.exports = seedOrders;
