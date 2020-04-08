const db = require('../database/dbConfig');

module.exports = {
addEntry,
getAll
}

async function addEntry(entry){
    await db('diaryEntry')
    .insert(entry, 'id')
    return db('diaryEntry');  
}

function getAll(){
    return db('diaryEntry');
}