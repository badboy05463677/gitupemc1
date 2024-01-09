const express = require('express');
const router = express.Router();
const client = require('../connection');
const { ObjectId } = require('mongodb');

router.get('/', async (req, res) => {
    let result = await client.db('schoolmanagement').collection('admin').find({}).toArray();
    res.send(result);
});

router.post('/',async(req,res)=>{
    let data ={
        name:req.body.name,
        dob:req.body.dob,
        age:req.body.age,
        Gender:req.body.Gender,
        Qualification:req.body.Qualification,
        phonenumber:req.body.phonenumber,
        Email:req.body.Email,
        Adreass:req.body.Adreass
    }
    await client.db("schoolmanagement").collection('admin').insertOne(data)
    res.send('data inserted')
    
})
router.put('/update/:id',async(req,res)=>{
    await client.db('schoolmanagement').collection('admin').updateOne(
        {_id:new ObjectId(req.params.id)},
            {$set:{age:req.body.age}}
        
    )
    res.send("Updated......")
})
router.delete('/delete/:id',async(req,res)=>{
    await client.db("schoolmanagement").collection('admin').findOneAndDelete({_id:new ObjectId(req.params.id)});
    res.send("Deleted....")
})


module.exports = router;