
exports.up = function(knex) {
  return knex.schema
  .createTable('users', table => {
      table.increments('id');
      table.string('username', 255).notNullable().unique();
      table.string('password', 255).notNullable();
  })
  .createTable('diaryEntry', table => {
      table.increments('id');
      table.string('user').references('username').inTable('users');
      table.string('dearDiary').notNullable();
      table.string('whoItWasWith');
      table.string('whenItHappened');
  })

};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('diaryEntry')
};
