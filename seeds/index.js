const seedOrders = require('./order-seeds');
const seedPayments = require('./payment-seeds');
const seedPizzas = require('./pizza-seeds');
const seedToppings = require('./topping-seeds');
const seedUsers = require('./user-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  
  await seedOrders();
  console.log('\n----- ORDERS SEEDED -----\n');

  await seedPayments();
  console.log('\n----- PAYMENTS SEEDED -----\n');

  await seedPizzas();
  console.log('\n----- PIZZAS SEEDED -----\n');

  await seedToppings();
  console.log('\n----- TOPPINGS SEEDED -----\n');

  

  process.exit(0);
};

seedAll();
