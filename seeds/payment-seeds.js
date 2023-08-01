const { Payment } = require('../models');

const paymentData = [
  {
    payment_method: 'Credit Card',
    transaction_id: 'abc123',
    status: 'Completed',
    amount: 24.99,
    userId: 1, 
  },
  {
    payment_method: 'PayPal',
    transaction_id: 'xyz456',
    status: 'Completed',
    amount: 19.99,
    userId: 2, 
  },
];

const seedPayments = () => {
  return Payment.bulkCreate(paymentData);
};

module.exports = seedPayments;
