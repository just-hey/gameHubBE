//this is a join table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_services', table => {
    table.increments()
    
    table.intger('user_id').notNullable().defaultsTo(0)
    table.foreign('user_id').references('users.id').onDelete('CASCADE')

    table.integer('service_id').notNullable().defaultsTo(0)
    table.foreign('service_id').references('services.id').onDelete('CASCADE')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_services')
};
