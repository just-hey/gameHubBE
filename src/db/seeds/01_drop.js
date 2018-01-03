
exports.seed = function(knex, Promise) {
  // Deletes ALL existing tables
  return knex('service_games').del()
    .then(() => knex('user_services').del())
    .then(() => knex('stats').del())
    .then(() => knex('requests').del())
    .then(() => knex('games').del())
    .then(() => knex('services').del())
    .then(() => knex('users').del())
}
