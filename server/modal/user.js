import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   firstName: {
    type: String,
    required: true,
   },
   lastName: {
      type: String,
      required: true,
     },
   email: {
      type :String ,
      required:[true,'Email is Required'],
   },
   phone: {
    type: String,
    required: true,
   },
   userName: {
     type: String,
     required: true
   },
   referCode: {
    type: String,
    required: false,
   },
   token: {
      type: String,
      required: true,
   },
   isVerified: {
      type: Boolean,
      default :false
   }
})

const user = mongoose.model('users',userSchema);

export default user;