const Order = require('./order');
const Pizza = require('./pizza');
const Toppings = require('./topping');
const Payment = require('./payment');
const User = require('./user');

// write relations here
Order.belongsTo(User, { foreignKey: 'userId'});

Pizza.hasMany(Toppings, { foreignKey: 'pizzaId'});

Toppings.belongsTo(Pizza, {foreignKey: 'toppingId'});

Payment.belongsTo(User, { foreignKey: 'paymentId'})

module.exports = {
    Order,
    Payment,
    Pizza,
    Toppings,
    User
};
