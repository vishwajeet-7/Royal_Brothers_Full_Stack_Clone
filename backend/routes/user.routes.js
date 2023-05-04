const express = require('express');
const User = require('../models/user.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userRoute = express.Router()

userRoute.post('/signup',async(req,res)=>{
    try {
        const {name,email,mobile,password} = req.body;
    
        const isUSer = await User.findOne({email:email});

        if(isUSer){
            res.send({
                message:"User already exists"
            })
        }
        else{
    
            bcrypt.hash(password, 4, async function(err, hash) {
                // Store hash in your password DB.
                if(err){
                    res.status(500).send({
                        message:"Something went wrong"
                    })
                } 
                const new_user = new User({
                    name,
                    email,
                    mobile,
                    password:hash
                })
                try {
                    await new_user.save()
                    res.send({
                        data:new_user
                    })
                } catch (error) {
                    res.status(500).send({
                        message:"Something went wrong",
                        err:error
                    })
                }
            });
        }

    } catch (error) {
        res.status(500).send({
            error:"Something went wrong"
        })
    }

})

userRoute.post('/login',async(req,res)=>{
    try {
        const {mobile,password} = req.body;
        const user = await User.findOne({mobile})
        const hashed_password = user.password
        const user_id = user._id
        bcrypt.compare(password, hashed_password, function(err, result) {
            // result == true
            if(err){
                return res.status(500).send({error:"Something went wrong try again later"})
            }
    
            if(result){
                const token = jwt.sign({user_id},process.env.SECRET_KEY);
                res.send({message:"login successfull",token,user})
            }
            else{
                res.status(404).send({message:"User not found"})
            }
        });
    } catch (error) {
        res.status(500).send({
            error:"Something went wrong"
        })
    }
})

module.exports = userRoute;