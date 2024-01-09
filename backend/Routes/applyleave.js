// Import necessary modules
const express = require('express');
const router = express.Router();
const client = require('../connection');


router.get('/', async (req, res) => {
    try {
        let result = await client.db('schoolmanagement').collection('apply leave').find().toArray();
        res.send(result);
    } catch (error) {
        console.error('Error fetching apply leave data:', error);
        res.status(500).send('Internal Server Error');
    }
});


router.post('/', async (req, res) => {
    try {
        
           
        

        await client.db('schoolmanagement').collection('apply leave').insertOne(req.body);
        res.send('apply leave data inserted');
    } catch (error) {
        console.error('Error inserting apply leave data:', error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;
