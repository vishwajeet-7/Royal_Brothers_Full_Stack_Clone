const mongoose = require('mongoose')

const BikeSchema = new mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:String,required:true},
    city:{type:String,required:true},
    location:{type:[String],required:true},
    pickup_date:{type:String},
    pickup_time:{type:String},
    dropoff_date:{type:String},
    dropoff_time:{type:String},
})

const Bike = mongoose.model('bike',BikeSchema)

module.exports = Bike