const mongoose = require('mongoose')

const TimingSchema = new mongoose.Schema({
    pickup_date:{type:String,required:true},
    pickup_time:{type:String,required:true},
    dropoff_date:{type:String,required:true},
    dropoff_time:{type:String,required:true},
    user_id:{type:String,required:true},
})

const Timing = mongoose.model('rentaltime',TimingSchema)

module.exports = Timing;