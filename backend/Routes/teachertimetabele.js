const express = require('express');
const router = express.Router();
const client = require('../connection');


router.get('/', async (req, res) => {
    let result = await client.db('schoolmanagement').collection('teachertimetabele').find({}).toArray();
    res.send(result);
});

router.post('/', async (req, res) => {
    const data = {
        name: req.body.Timetable[0].name,
        periods: req.body.Timetable[0].Periods,
    };
    await client.db("schoolmanagement").collection('teachertimetabele').insertOne(data);
    res.send('data inserted');
});





module.exports = router;
