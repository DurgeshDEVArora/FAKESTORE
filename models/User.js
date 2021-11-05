import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  address: {
    street: String,
    city: String,
    pincode: Number,
    country: String,
  },
  orders:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"orders"
  }
},{
    timestamps:true
});


const User  = new mongoose.model('users',userSchema)


export default User;
