import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("User", UserSchema);

export default User;
