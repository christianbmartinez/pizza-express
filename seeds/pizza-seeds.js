const { Pizza } = require('../models')

const pizzaData = [
  {
    name: 'Margherita',
    description:
      'Celebrate your tastebuds with our delicious Margherita pizza! A freshly baked crust topped with fresh basil, rich tomatoes, and our signature margy sauce.',
    price: 12.99,
    ingredients: ['Tomato sauce', 'Mozzarella cheese', 'Fresh basil'],
    img_url:
      'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    name: 'The Supreme',
    description:
      'Savor the delightful combination of savory pepperoni, Italian sausage, fresh vegetables, and melted mozzarella cheese on a mouthwatering hand-tossed crust.',
    price: 14.99,
    ingredients: ['Tomato sauce', 'Mozzarella cheese', 'Sausage', 'Vegetables'],
    img_url:
      'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    name: 'Spicy Pepperoni',
    description:
      'Tantalize your taste buds with the perfect balance of heat and flavor, complemented by our signature tomato sauce and gooey mozzarella cheese, all resting on a crispy crust.',
    price: 14.99,
    ingredients: ['Tomato sauce', 'Mozzarella cheese', 'Pepperoni'],
    img_url:
      'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    name: 'Classic Cheese',
    description:
      'Indulge in the creamy, mouthwatering mozzarella that blankets our perfectly baked crust, topped with rich and savory tomato sauce.',
    price: 12.99,
    ingredients: ['Tomato sauce', 'Mozzarella cheese'],
    img_url:
      'https://images.unsplash.com/photo-1620374645498-af6bd681a0bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    name: 'The Hawaiian',
    description:
      'Our hawaiian pizza comes freshly baked with a generous amount of pinnaple topped with the perfect amount of cheese.',
    price: 12.99,
    ingredients: ['Tomato sauce', 'Mozzarella cheese', 'Pineapple'],
    img_url:
      'https://images.unsplash.com/photo-1620374645498-af6bd681a0bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    name: 'Meat Lovers',
    description:
      'Savor one of our personal favorite pizzas. The meat lovers comes with a perfect blend of sausage, and ground beef.',
    price: 12.99,
    ingredients: [
      'Tomato sauce',
      'Mozzarella cheese',
      'Sausage',
      'Ground Beef',
    ],
    img_url:
      'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
]

const seedPizzas = () => {
  return Pizza.bulkCreate(pizzaData)
}

module.exports = seedPizzas
