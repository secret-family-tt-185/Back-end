
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'bread'},
        {id: 2, name: 'Cheddar Cheese'},
        {id: 3, name: 'Butter'}
      ]);
    });
};
