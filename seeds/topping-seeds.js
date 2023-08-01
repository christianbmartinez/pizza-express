const { Toppings } = require('../models');

const toppingData = [
  {
    name: 'Pepperoni',
  },
  {
    name: 'Mushrooms',
  },
  {
    name: 'Onions',
  },
  {
    name: 'Sausage',
  },
  {
    name: 'Olives',
  },
  {
    name: 'Ham',
  },
  {
    name: 'Pineapple',
  },
  {
    name: 'Vegetables',
  }
];

const seedToppings = () => {
  return Toppings.bulkCreate(toppingData);
};

module.exports = seedToppings;
