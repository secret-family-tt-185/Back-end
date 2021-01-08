
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {id: 1,
         title: 'Grilled Cheese',
         source: 'Grandma',
         instructions: 'Spread 1/2 tablespoon of butter on one side of each piece of bread. Lie the slices of Cheddar on one of the slices of bread on the unbuttered side.Sandwich the two slices of bread together with the buttered sides facing outwards.Heat a skillet over medium heat. When skillet is hot, gently lie the sandwich in the skillet; cook on each side for 3 minutes until cheese has melted.',
         category_id: 1,
         ingredient_id: (1,2,3),
         user_id: 1
       },
      ]);
    });
};
