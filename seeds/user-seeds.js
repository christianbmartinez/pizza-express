const { User } = require('../models')

const userData = [
<<<<<<< HEAD
  {
    full_name: 'Lilac Jonas',
    email: 'jonasjosh7@gmail.com',
    password: 'testtest',
    street_name: '959 E 200 S',
    city: 'Salt Lake City',
    state: 'Utah',
    zip_code: '84102',
  },
]

module.exports = userData
=======
    {
        full_name: 'Lilac Jonas',
        email: 'jonasjosh7@gmail.com',
        password: 'testtest',
        street_name: '959 E 200 S',
        city: 'Salt Lake City',
        state: 'Utah',
        zip_code: '84102'
    }
]

const seedUsers = () => {
    return Users.bulkCreate(userData);
  };
  
  module.exports = seedUsers;
>>>>>>> 8eeb4d3bcb0bd70d719118e8a56a58b3776ef5e6
