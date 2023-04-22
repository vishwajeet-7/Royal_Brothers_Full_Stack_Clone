const express = require("express");
const Bike = require("../models/bike.model");

const BikeRouter = express.Router();

BikeRouter.post("/", async(req, res) => {
  try {
    const {
      name,
      image,
      price,
      city,
      location,
      pickup_date,
      pickup_time,
      dropoff_date,
      dropoff_time,
    } = req.body;

    const new_bike = new Bike({
      name,
      image,
      price,
      city,
      location,
      pickup_date,
      pickup_time,
      dropoff_date,
      dropoff_time,
    });
    await new_bike.save()
    res.send({
      bike: new_bike,
    });
  } catch (error) {
    res.status(500).send({
      error: "Something went wrong",
    });
  }
});


module.exports = BikeRouter;