import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const SignUp = async (req,res)=>{
    const {fullName,email,password} = req.body;
    try {
        if(!fullName || !email || !password ) {
            return res.json({success: false,message: "Missing any fields"})
        }
        const user = await User.findOne({email});
        if(user) {
            return res.json({success: false,message: "user already exist"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashpass = bcrypt.hash(password,salt);
        const newUser = await User.create({
            fullName,email,password:hashpass
        })
        const token = generateToken(newUser._id);
        res.json({success: true,dataUser: newUser, token ,message: "successfully sigh up"})

    } catch (error) {
        console.log(error.message);
        res.json({success:false,message: error.message})
    }
}