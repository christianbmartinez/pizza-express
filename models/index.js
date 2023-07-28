const Order = require('./order');
const Payment = require('./payment');
const Pizza = require('./pizza');
const Toppings = require('./topping');
const Payment = require('./payment');
const User = require('./user');



User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };
