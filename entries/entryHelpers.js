const db = require('../database');

module.exports = {
addEntry
}

async function addEntry(entry){
    await db('diaryEntry')
    .insert(entry, 'id')
    return db('diaryEntry');
}

