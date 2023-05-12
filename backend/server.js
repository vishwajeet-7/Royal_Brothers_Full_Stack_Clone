const express = require('express');
const connectDB = require('./database/connectDB');
const userRoute = require('./routes/user.routes');
const cors = require('cors');
const BikeRouter = require('./routes/bike.routes');
const rentalTimingRoute = require('./routes/timing.routes');


const app = express();

app.use(express.static('build'))

app.use(cors())
app.use(express.json())
app.use('/api/user',userRoute)
app.use('/api/bike',BikeRouter)
app.use('/api/rental',rentalTimingRoute)


app.get('/',(req,res)=>{
    res.send({
        message:'Hello World'
    })
})

app.use('/*',(req,res)=>{
    res.sendFile(__dirname + '/build/index.html')
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
