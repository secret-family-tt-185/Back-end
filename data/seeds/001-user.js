
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1,
          username: 'testuser1',
          password: 'testpassword'
        },
        {id: 2,
          username: 'testuser2',
          password: 'testpassword'
      },
        {id: 3,
          username: 'testuser3',
          password: 'testpassword'
        }
      ]);
    });
};
