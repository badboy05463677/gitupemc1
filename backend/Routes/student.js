const express = require('express');
const router = express.Router();
const client = require('../connection');
const { ObjectId } = require('mongodb');

router.get('/', async (req, res) => {
    let result = await client.db('schoolmanagement').collection('student').find({}).toArray();
    res.send(result);
});

router.post('/',async(req,res)=>{
    let data ={
        name:req.body.name,
        dob:req.body.dob,
        age:req.body.age,
        Gender:req.body.Gender,
        fathername:req.body.fathername,
        mothername:req.body.mothername,
        
        class:req.body.class,
        Adreass:req.body.Adreass,
        bloodgroup:req.body.bloodgroup,
        Occupation:req.body.Occupation
    }
    await client.db("schoolmanagement").collection('student').insertOne(data)
    res.send('data inserted')
    
})
router.put('/update/:id',async(req,res)=>{
    await client.db('schoolmanagement').collection('student').updateOne(
        {_id:new ObjectId(req.params.id)},
            {$set:{age:req.body.age}}
        
    )
    res.send("Updated......")
})
router.delete('/delete/:id',async(req,res)=>{
    await client.db("schoolmanagement").collection('student').findOneAndDelete({_id:new ObjectId(req.params.id)});
    res.send("Deleted....")
})


module.exports = router;