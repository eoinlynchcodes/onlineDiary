const router = require('express').Router();

const entryHelpers = require('./entryHelpers');

router.get('/', (req, res) => {
    res.status(200).json({ message: "hello from entry routes"});
});

router.get('/all', (req, res) => {
    entryHelpers.getAll()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    })
});

router.post('/diaryentry', (req, res) => {
let { userID, dearDiary, whoItWasWith, whenItHappened } = req.body;

console.log(req.headers);
entryHelpers.addEntry({
    userID,
    dearDiary,
    whoItWasWith,
    whenItHappened
})
.then(newEntry => {
    res.status(201).json(newEntry);
})
.catch(error => {
    res.status(500).json(error);
});
});

module.exports = router;