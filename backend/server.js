const express = require('express');
const connectDB = require('./database/connectDB');
const userRoute = require('./routes/user.routes');
const cors = require('cors')


const app = express();

app.use(cors())
app.use(express.json())
app.use('/user',userRoute)


app.get('/',(req,res)=>{
    res.send({
        message:'Hello World'
    })
})

app.listen(8080,async()=>{
    try {
        await connectDB;
        console.log('connected to db')
    } catch (error) {
        console.log(error)
    }
    console.log('Server listening at http://localhost:8080')
})
