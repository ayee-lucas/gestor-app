'use strict'

'use strict'

import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IRoom {
  roomNumber: string;
  type: string;
  description: string;
  price: number;
  available: boolean;
  createdAt: Date;
}

export interface IRoomModel extends IRoom, Document {}

const roomSchema = new Schema(
  {
    roomNumber: {
      type: String,
      required: [true, "Room number is required."],
      unique: [true, "This room number already exists!"],
      match: [/^[a-zA-Z0-9]+$/, "Room number must contain only letters and numbers."],
      minlength: [3, "Room number must be at least 3 characters long."],
      maxlength: [10, "Room number cannot exceed 10 characters."],
    },
    type: {
      type: String,
      required: [true, "Room type is required."],
      enum: {
        values: ["single", "double", "suite"],
        message: "Room type must be single, double or suite.",
      },
    },
    description: {
      type: String,
      required: [true, "Room description is required."],
      maxlength: [500, "Room description cannot exceed 500 characters."],
    },
    price: {
      type: Number,
      required: [true, "Room price is required."],
      min: [0, "Room price must be greater than or equal to 0."],
      max: [1000, "Room price cannot exceed 1000."],
    },
    available: {
      type: Boolean,
      default: true,
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

const Room = (models.Room ||
  mongoose.model<IRoomModel>("Room", roomSchema)) as typeof models.Room &
  (new (args: any) => IRoomModel);

export default Room;
