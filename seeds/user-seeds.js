const { User } = require('../models')

const userData = [
    {
        full_name: 'Lilac Jonas',
        email: 'jonasjosh7@gmail.com',
        password: 'testtest',
        street_name: '959 E 200 S',
        city: 'Salt Lake City',
        state: 'Utah',
        zip_code: '84102'
    },
    {
        full_name: 'Jane Doe',
        email: 'test@gmail.com',
        password: 'test',
        street_name: '100 S',
        city: 'Salt Lake City',
        state: 'Utah',
        zip_code: '84102'
    }
]

const seedUsers = () => {
    return User.bulkCreate(userData);
  };
  
  module.exports = seedUsers;
