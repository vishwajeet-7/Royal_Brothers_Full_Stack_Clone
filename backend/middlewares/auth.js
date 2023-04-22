const jwt = require('jsonwebtoken')

const Auth = (req,res,next)=>{
    const token = req.headers?.authorization?.split(" ")[1];


    if(!token){
        res.send("Please login")
    }

    const decoded = jwt.verify(token,process.env.SECRET_KEY);
    const user_id = decoded.user_id
    if(decoded){
        req.body.user_id = user_id;
        next();
    }
    else{
        res.send("Please login")
    }
}

module.exports = Auth