
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_services').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_services').insert([
        {user_id: 1, service_id: 1, users_service_id: null},
        {user_id: 1, service_id: 2, users_service_id: null},
        {user_id: 2, service_id: 1, users_service_id: null},
        {user_id: 2, service_id: 2, users_service_id: null},
        {user_id: 2, service_id: 3, users_service_id: null},
        {user_id: 3, service_id: 3, users_service_id: null}
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('user_services_id_seq', (SELECT MAX(id) FROM user_services));`)
    })
};
