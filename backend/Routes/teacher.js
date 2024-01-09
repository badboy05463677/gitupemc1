const express = require('express');
const router = express.Router();
const client = require('../connection');
const { ObjectId } = require('mongodb');

router.get('/', async (req, res) => {
    let result = await client.db('schoolmanagement').collection('teacher').find({}).toArray();
    res.send(result);
});

router.post('/',async(req,res)=>{
    let data ={
        name:req.body.name,
        dob:req.body.dob,
        age:req.body.age,
        Gender:req.body.Gender,
        Qualification:req.body.Qualification,
        experiance:req.body.experiance,
        phonenumber:req.body.phonenumber,
        Email:req.body.Email,
        Adreass:req.body.Adreass,
        class:req.body.class
    }
    await client.db("schoolmanagement").collection('teacher').insertOne(data)
    res.send('data inserted')
    
})


router.put('/update/:id', async (req, res) => {
    const { name, age, dob, Gender, Qualification, experiance, phonenumber, Email, Adreass, class: teacherClass } = req.body;

    await client.db('schoolmanagement').collection('teacher').updateOne(
        { _id: new ObjectId(req.params.id) },
        {
            $set: {
                name: name,
                age: age,
                dob: dob,
                Gender: Gender,
                Qualification: Qualification,
                experiance: experiance,
                phonenumber: phonenumber,
                Email: Email,
                Adreass: Adreass,
                class: teacherClass 
            }
        }
    );

    res.send("Updated......");
});



router.delete('/delete/:id',async(req,res)=>{
    await client.db("schoolmanagement").collection('teacher').findOneAndDelete({_id:new ObjectId(req.params.id)});
    res.send("Deleted....")
})


module.exports = router;