const { User } = require('../models')

const userData = [
  {
    full_name: 'Lilac Jonas',
    email: 'jonasjosh7@gmail.com',
    password: 'abc123',
    street_name: '959 E 200 S',
    city: 'Salt Lake City',
    state: 'Utah',
    zip_code: '84102',
  },
  {
    full_name: 'Christian Martinez',
    email: 'chris@live.com',
    password: 'abc123',
    street_name: '959 E 200 S',
    city: 'Salt Lake City',
    state: 'Utah',
    zip_code: '84102',
  },
  {
    full_name: 'John Jones',
    email: 'john@live.com',
    password: 'abc123',
    street_name: '959 E 200 S',
    city: 'Salt Lake City',
    state: 'Utah',
    zip_code: '84102',
  },
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers
