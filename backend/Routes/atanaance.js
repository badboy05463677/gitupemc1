const express = require('express');
const router = express.Router();
const client = require('../connection');

router.get('/', async (req, res) => {
    try {
        let result = await client.db('schoolmanagement').collection('atanace').find({}).toArray();
        res.send(result);
    } catch (error) {
        console.error('Error fetching attendance data:', error);
        res.status(500).send('Internal Server Error');
    }
});

// POST request to insert new attendance data
router.post('/', async (req, res) => {
    try {
        let data = {
            date: req.body.date,
            name: req.body.name,
            present: req.body.present
        };

        await client.db('schoolmanagement').collection('atanace').insertOne(data);
        res.send('Attendance data inserted');
    } catch (error) {
        console.error('Error inserting attendance data:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;

