import user from "../modal/user.js";

export const signUp = async(req,resp)=>{
    try {
        let exist = await user.findOne({ phoneNumber: req.body.phone });

        if(exist) {
            resp.status(200).json('user already exists');
            return;
        }

        const newUser = new user(req.body);
        await newUser.save();
        resp.status(201).json(newUser);
    } catch (error) {
        resp.status(500).json(error.message);
    }
}