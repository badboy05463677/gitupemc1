const express = require('express');
const cors = require('cors');

const app = express();
const admin = require('./Routes/admin');
const teacher = require('./Routes/teacher');
const student=require('./Routes/student')
const teachertimetabele=require('./Routes/teachertimetabele')
const atanaance=require('./Routes/atanaance')
const applyleave=require('./Routes/applyleave')

app.use(express.json());
app.use(cors());

const actualKey = "YWRtaW46MTIz";

app.use(function(req, res, next) {
    console.log(req.url, req.method, new Date().toLocaleString());
    let receivedKey = req.headers.authorization;
    receivedKey = receivedKey ? receivedKey.split(" ")[1] : null;

    if (receivedKey === actualKey) {
        next();
    } else {
        res.send('Invalid data');
    }
});

app.use('/admin', admin);
app.use('/teacher', teacher);
app.use('/student',student)
app.use('/teachertimetabele',teachertimetabele)
app.use('/atanaance',atanaance)
app.use('/applyleave',applyleave)




app.listen(3001, () => {
    console.log('Server started on port 3001');
});
