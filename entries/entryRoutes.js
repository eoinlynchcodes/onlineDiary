const router = require('express').Router();

// const entryHelpers = require('./entryHelpers');


router.get('/', (req, res) => {
    res.status(200).json({ message: "hello from entry routes"});
});

// router.post('/diaryEntry', (req, res) => {
// let { dearDiary, whoItWasWith, whenItHappened } = req.body;

// entryHelpers.addEntry({
//     dearDiary,
//     whoItWasWith,
//     whenItHappened
// })
// .then(newEntry => {
//     res.status(201).json(newEntry);
// })
// .catch(error => {
//     res.status(500).json(error);
// });
// });

module.exports = router;