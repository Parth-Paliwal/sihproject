import express from "express";
import jwt from "jsonwebtoken";
const router  = express.Router();
import bcrypt from "bcrypt";
import {body , validationResult} from "express-validator";

import {User} from "../model/user.model.js";
const sign = process.env.SIGN;


// Router 1 : for signup ;

router.post("/signup" , [
    body("username").isLength({ min: 5 }),
    body("password").isLength({min : 6}),
    body("phone").isLength({min : 10 , max : 10})
] , async (req , res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error : errors.array() });
    }

    //checking number is unique or not

    try{
        let number = await User.findOne({phone : req.body.phone});
        if(number){
            res.status(400).json({error : "phone number already exist"});
        }
        const salt = await bcrypt.genSalt(10);
        const secpass = await bcrypt.hash(req.body.password , salt);

        const result = await User.create({
            username : req.body.username,
            password : secpass,
            phone : req.body.phone
        })

        //setting up JWT token

        const data = {
            user : {
                id : result.id
            }
        }
        const authtoken  = jwt.sign(data , sign);
        res.send({authtoken : authtoken});

    }catch(error){
        console.log(error.message);
        res.send(500).send("error occur during user creation ");
        }
    }
)

//Router 2 : login

router.post("/login" , [
    body("phone" , "enter a valid phone number").isLength({min:10, max:10}),
    body("password" , "enter password").exists()
] , async (req , res)=>{
    const errors = validationResult(req);

    //checking for email and password;

    if(!errors.isEmpty()){
        return res.send("error occur due to unvalid phone number or password");
    }

    const {phone , password} = req.body;

    try {
        let user = await User.findOne({phone : phone});
        if(!user){
            return res.status(400).send({error  : "user does not exist"}); 
        }
        let passsalt = await bcrypt.compare(password , user.password);

        if(!passsalt){
            return res.status(400).json({error : "please enter correct credentials"});
        }

        let data = {
            user : {
            id: user.id
        }
        }

        const authtoken = jwt.sign(data , sign);

        res.status(200).send({authtoken : authtoken});

    }catch(error){
        console.log(error.message);
        res.status(500).send("internal server error");
    }

})

export default router