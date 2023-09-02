import user from "../modal/user.js";
import { getToken } from "../utils/utils.js";

//Sign Up
export const signUp = async(req,resp)=>{
    try {
        let exist = await user.findOne({ phoneNumber: req.body.phone });

        if(exist) {
            resp.status(200).json('user already exists');
            return;
        }
        const userData = req.body;
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
        }
        const token = await getToken(data);
        userData.token = token;
        const newUser = new user(userData);
        await newUser.save();
        resp.status(201).json({message: "New User Added Successfully",data: newUser});
    } catch (error) {
        resp.status(500).json(error.message);
    }
}

//Login
export const logIn = async(req,resp)=>{
    try {
        let exist = await user.findOne({ phoneNumber: req.body.phoneNumber });

        if(!exist) {
            resp.status(200).json('Phone number is not verified, Please register then try to login.');
            return;
        }

        const newUser = new user(req.body);
        await newUser.save();
        resp.status(201).json({message: "New User Added Successfully",data: newUser});
    } catch (error) {
        resp.status(500).json(error.message);
    }
}