const Order = require('./order')
const Pizza = require('./pizza')
const Toppings = require('./toppings')
const Payment = require('./payment')
const User = require('./user')

// write relations here
Order.belongsTo(User, { foreignKey: 'userId' })

Pizza.belongsToMany(Toppings, {
  through: 'PizzaToppings', 
  foreignKey: 'pizza_id', 
  otherKey: 'toppings_id', 
});

Toppings.belongsTo(Pizza, { foreignKey: 'pizzaId' })

Payment.belongsTo(User, { foreignKey: 'paymentId' })

module.exports = {
  Order,
  Payment,
  Pizza,
  Toppings,
  User,
}
