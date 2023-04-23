const express = require('express');
const Auth = require('../middlewares/auth');
const Timing = require('../models/timing.model');

const rentalTimingRoute = express.Router();

rentalTimingRoute.post('/',Auth,async(req,res)=>{
    try {
        const {pickup_date,pickup_time,dropoff_date,dropoff_time,user_id} = req.body;
        // console.log(pickup_date,pickup_time,dropoff_date,dropoff_time);
        const rental_timing = new Timing({
            pickup_date,
            pickup_time,
            dropoff_date,
            dropoff_time,
            user_id
        })

        await rental_timing.save();
        res.send({
            rental_details: rental_timing
        })

    } catch (error) {
        res.status(500).send({
            error: 'Something went wrong'
        })
    }
})

rentalTimingRoute.put('/',Auth,(req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).send({
            error:"Something went wrong"
        })
    }
})

module.exports = rentalTimingRoute;