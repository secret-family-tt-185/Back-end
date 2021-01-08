const bcrypt = require('bcrypt');

const hash = bcrypt.hashSync(`${process.env.PASSWORD}`, 10)

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1,
          username: 'testuser1',
          password: hash
        },
        {id: 2,
          username: 'testuser2',
          password: hash
      },
        {id: 3,
          username: 'testuser3',
          password: hash
        }
      ]);
    });
};
