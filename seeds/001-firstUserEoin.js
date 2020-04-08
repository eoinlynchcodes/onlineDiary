
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('diaryEntry').del()
    .then(function () {
      // Inserts seed entries
      return knex('diaryEntry').insert([
        {id: 1, userID: 1, dearDiary: "Wrote some code today", whoItWasWith: "Alone", whenItHappened: "April 7 2020"}
      ]);
    });
};
