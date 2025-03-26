import mongoose from "mongoose";
const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      require: true,
    },
    profilePicture: String,
    coverPicture: String,
    about: String,
    livesin: String,
    workAt: String,
    relationship: String,
    follower: [],
    following: [],
  },
  { timestamps: true }
);

const userModel = mongoose.model("Users", UserSchema);

export default userModel;
