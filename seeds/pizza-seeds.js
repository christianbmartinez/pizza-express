const { Pizza } = require('../models');

const pizzaData = [
    {
        name: 'Margherita',
        description: 'Classic tomato, mozzarella, and basil',
        price: 12.99,
        ingredients: ['Tomato sauce', 'Mozzarella cheese', 'Fresh basil'],
    },
    {
        name: 'The Supreme',
        description: 'Savor the delightful combination of savory pepperoni, Italian sausage, fresh vegetables, and melted mozzarella cheese on a mouthwatering hand-tossed crust.',
        price: 14.99,
        ingredients: ['Tomato sauce', 'Mozzarella cheese', 'Sausage', 'Vegetables'],
    },
    {
        name: 'Spicy Pepperoni',
        description: 'Tantalize your taste buds with the perfect balance of heat and flavor, complemented by our signature tomato sauce and gooey mozzarella cheese, all resting on a crispy crust.',
        price: 14.99,
        ingredients: ['Tomato sauce', 'Mozzarella cheese', 'Pepperoni'],
    },
    {
        name: 'Classic Cheese',
        description: 'Indulge in the creamy, mouthwatering mozzarella that blankets our perfectly baked crust, topped with rich and savory tomato sauce.',
        price: 12.99,
        ingredients: ['Tomato sauce', 'Mozzarella cheese'],
    },
];

const seedPizzas = () => {
    return Pizza.bulkCreate(pizzaData);
  };
  
  module.exports = seedPizzas;
