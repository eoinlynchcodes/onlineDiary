
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('diaryEntry').del()
    .then(function () {
      // Inserts seed entries
      return knex('diaryEntry').insert([
        {id: 1, user: 'eoinlynch', dearDiary: 'Today I ran to the river.', whoItWasWith: 'I was alone.', whenItHappened: 'April 3 2020' }
      ]);
    });
};
