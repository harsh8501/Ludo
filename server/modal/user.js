import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   fullName: {
    type: String,
    required: true,
   },
   phoneNumber: {
    type: String,
    required: true,
   },
   referCode: {
    type: String,
    required: false,
   }
})

const user = mongoose.model('users',userSchema);

export default user;