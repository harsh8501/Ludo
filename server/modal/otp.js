import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
   phoneNumber: {
    type: String,
    required: true,
   },
   otp: {
    type: String,
    required: true,
   },
   createdAt:{
      type : String,
      required: true,
   },
   expiresAt: {
      type : String,
      required: true,
   }
})

const otp = mongoose.model('otps',otpSchema);

export default otp;