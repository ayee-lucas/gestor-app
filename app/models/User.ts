"use strict";

import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IUser {
  name: string;
    surname: string;
    username: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
}

export interface IUserModel extends IUser, Document {}

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  surname: {
    type: String,
    required: [true, "Surname is required."],
  },
  username: {
    type: String,
    required: [true, "Username is required."],
    unique: [true, "This username already exists!"],
    validate: {
      validator: async function (value:any) {
        const existingUser = await model("User").findOne({ username: value });
        return !existingUser;
      },
      message: "This username already exists!",
    },
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    lowercase: true,
    unique: true,
    validate: {
      validator: async function (value:any) {
        const existingUser = await model("User").findOne({ email: value });
        return !existingUser;
      },
      message: "This email already exists!",
    },
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    minlength: [8, "Password must be at least 8 characters long."],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},
{
  versionKey: false,
}

);


const User = (models.User || mongoose.model<IUserModel>("User", userSchema)) as typeof models.User & (new (args: any) => IUserModel);


export default User;
