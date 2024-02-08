import express from "express";
const router = express.Router() ;
import { User } from "../models/User.js"; 

router.post('/createuser', async(req, res) => { 
    try {
        const {name, email, password, location} = req.body ;
        await User.create({ 
            name, 
            password, 
            email, 
            location,
        })
        
        res.json({success:true});
    } catch (error) {
        console.log(error) ;

        res.json({success:false});
    }
})

export default router ; 