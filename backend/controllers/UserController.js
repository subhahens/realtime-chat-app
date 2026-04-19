import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const SignUp = async (req,res)=>{

    const {Name,email,password} = req.body;
    try { 
        if(!Name || !email || !password ) {
            return res.json({success: false,message: "Missing any fields"})
        }
        const user = await User.findOne({email});
        if(user) {
            return res.json({success: false,message: "user already exist"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashpass = await  bcrypt.hash(password,salt);
        const newUser = await User.create({
            Name,email,password:hashpass
        })
        const token = generateToken(newUser._id);
        res.json({success: true,dataUser: newUser, token ,message: "successfully sigh up"})

    } catch (error) {
        console.log(error.message);
        res.json({success:false,message: error.message})
    }
}

export const Login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const dataUser = await User.findOne({email});
        if(!dataUser){
            return res.json({
                success:false,
                message:"User not found"
            });
        }
        const isPasswordCorrect = await bcrypt.compare(password,dataUser.password);
        if(!isPasswordCorrect) {
            res.json({success: false,message: "password incorrected"});
        }
        const token = generateToken(dataUser._id);
        res.json({success: true,dataUser, token ,message: "successfully login"})

    } catch (error) {
        console.log(error.message);
        res.json({success:false,message: error.message})
    }
}

export const updateUserProfile = async (req, res) => {
  try {
      
    const {profilePic,  Name, bio} = req.body;
    
    const userId = req.user._id; 
      
    let updateUser;
    if(!profilePic) {
        updateUser = await User.findByIdAndUpdate(userId,{bio,Name} ,{new: true});
    }else {
        const upload = await cloudinary.uploader.upload(profilePic);
        
        updateUser = await User.findByIdAndUpdate(userId,{profilePic : upload.secure_url,Name,bio} ,{new: true});
    }
    

    res.json({success: true, user: updateUser,message: "successfully updated"})

  } catch (error) {
    res.json({success: false, message: error.message});
  }
};

export const checkAuth = (req,res) => {
    res.json({success:true,user: req.user});
}