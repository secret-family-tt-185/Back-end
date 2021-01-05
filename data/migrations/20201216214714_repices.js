
exports.up = function(knex) {
  return knex.schema
  	.createTable('users', tbl => {
  		tbl.increments();
  		tbl.string('username', 128).notNullable().unique()
  		tbl.string('password', 128).notNullable()
  	})
  	.createTable('category', tbl => {
  		tbl.increments()
  		tbl.string('type', 128)
  	})
  	.createTable('ingredients', tbl => {
  		tbl.increments()
  		tbl.string('name', 128).notNullable().unique();
  	})
  	.createTable('recipe', tbl => {
  		tbl.increments();
  		tbl.string('title', 128).notNullable().unique()
  		tbl.string('source', 255).notNullable()
  		tbl.string('instructions', 500)
  		tbl.integer('category_id').unsigned().notNullable().references('id').inTable('category').onUpdate('CASCADE').onDelete('CASCADE')
  		tbl.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredients').onDelete('CASCADE').onUpdate('CASCADE')
  		tbl.integer('user_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
  	})
  	
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExisits('users')
  .dropTableIfExisits('category')
  .dropTableIfExisits('ingredients')
  .dropTableIfExisits('recipe');
};
