
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {id: 1, type: 'Dairy'},
        {id: 2, type: 'Beef'},
        {id: 3, type: 'Chicken'}
      ]);
    });
};
